import { useUnit } from "effector-react";
import { NavLink } from "react-router-dom";
import { isAutentificated } from "src/dict/mock";
import { $isOpenedSideBar, setStateSideBarFn } from "src/models/App";
import {
  EditIconSVG,
  HomeIconSVG,
  SignOutIconSVG,
  ToDoIconSVG,
} from "../images/svg";

import "src/ui/styles/blocks/side-nav.scss";
import { isActiveLink } from "src/dict/link";

export function SideNav() {
  const isOpenedSideBar = useUnit($isOpenedSideBar);

  const sideNavClassName = ["side-nav", "side-nav__desktop"];

  if (isOpenedSideBar) {
    sideNavClassName.push("side-nav__opened");
  }

  return (
    <>
      <div style={isAutentificated ? { display: "" } : { display: "none" }}>
        <div className={sideNavClassName.join(" ")}>
          <div className="profile">
            <div className="profile__photo">
              <p className="body2">NA</p>
            </div>

            <p className="profile__email caption1">name@BitPlatform.dev</p>

            <NavLink
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

            <NavLink
              to="/sign-out"
              className={isActiveLink}
              onClick={() => setStateSideBarFn()}
            >
              <SignOutIconSVG />
              Sign out
            </NavLink>
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
