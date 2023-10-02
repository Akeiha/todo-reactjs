import { useUnit } from "effector-react";
import { NavLink } from "react-router-dom";
import {
  $isOpenedSideBar,
  closeModalFn,
  openModalFn,
  setStateSideBarFn,
} from "src/models/App";
import { $userInfo } from "src/models/UserInfo";
import {
  CloseIconSVG,
  EditIconSVG,
  HomeIconSVG,
  SignOutIconSVG,
  ToDoIconSVG,
} from "../images/svg";
import { isActiveLink } from "src/dict/link";
import { $isAutentificated, userLogOutFn } from "src/models/SignIn";
import { Modal } from "../components/modal";
import { Button } from "../components";

import "src/ui/styles/blocks/side-nav.scss";
import { isEmpty } from "src/dict/lodash";

export function SideNav() {
  const [isOpenedSideBar, isAutentificated, { userPhoto }] = useUnit([
    $isOpenedSideBar,
    $isAutentificated,
    $userInfo,
  ]);

  const sideNavClassName = ["side-nav", "side-nav__desktop"];

  if (isOpenedSideBar) {
    sideNavClassName.push("side-nav__opened");
  }

  const { email } = useUnit($userInfo);
  const name = email.slice(0, 2);

  return (
    <>
      <div style={isAutentificated ? { display: "" } : { display: "none" }}>
        <div className={sideNavClassName.join(" ")}>
          <div className="profile">
            <div className="profile-photo">
              {isEmpty(userPhoto) ? (
                <p className="body2">{name.toUpperCase()}</p>
              ) : (
                <img className="edit-profile-photo" src={userPhoto} alt="" />
              )}
            </div>

            <p className="profile-email caption1">{email}</p>

            <NavLink
              to="/edit-profile"
              className="caption1 profile__edit"
              onClick={() => setStateSideBarFn()}
            >
              <EditIconSVG /> Edit profile
            </NavLink>
          </div>

          <div className="profile__line"></div>

          <nav className="navigate body1">
            <NavLink
              to="/"
              className={isActiveLink}
              onClick={() => setStateSideBarFn()}
            >
              <HomeIconSVG />
              Home
            </NavLink>

            <NavLink
              to="/todos"
              className={isActiveLink}
              onClick={() => setStateSideBarFn()}
            >
              <ToDoIconSVG />
              Todos
            </NavLink>
            <div>
              <button
                className="link"
                onClick={() => {
                  setStateSideBarFn();
                  openModalFn();
                }}
              >
                <SignOutIconSVG />
                Sign out
              </button>
              <Modal>
                <div className="sign-out">
                  <div className="sign-out__content ">
                    <button className="close-svg" onClick={closeModalFn}>
                      <CloseIconSVG />
                    </button>
                    <h2 className="sign-out__header">Sign out</h2>
                    <p>Are you sure you want to sign out?</p>
                    <div className="sign-out__buttons">
                      <Button
                        onClick={() => {
                          userLogOutFn(), closeModalFn();
                        }}
                      >
                        Sign Out
                      </Button>
                      <Button onClick={closeModalFn} className="close-button">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </nav>
        </div>

        <div
          onClick={() => setStateSideBarFn()}
          className="side-nav__background"
          style={isOpenedSideBar ? { display: "" } : { display: "none" }}
        ></div>
      </div>
    </>
  );
}
