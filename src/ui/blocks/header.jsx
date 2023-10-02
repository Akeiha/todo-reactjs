import { useUnit } from "effector-react";
import { LogoSVG, MenuSVG, SignInSVG, SignUpSVG } from "../images/svg";
import { NavLink } from "react-router-dom";
import { setStateSideBarFn } from "src/models/App";
import { $isAutentificated } from "src/models/SignIn";

import "src/ui/styles/blocks/header.scss";

export function Header() {
  const isAutentificated = useUnit($isAutentificated);

  return (
    <>
      <header className="header-fixed">
        <div className="header">
          <div style={{ display: "flex", marginTop: "7px" }}>
            <button
              onClick={() => setStateSideBarFn()}
              className="header__menu"
              style={isAutentificated ? { display: "" } : { display: "none" }}
            >
              <MenuSVG />
            </button>

            <NavLink to="/">
              <LogoSVG />
            </NavLink>
          </div>
          <nav className="header__nav nav caption1">
            <NavLink
              to="/privacy"
              className={
                isAutentificated
                  ? "nav__link privacy-autentificated"
                  : "nav__link privacy"
              }
            >
              Privacy
            </NavLink>
            <div
              className="nav__sign"
              style={
                isAutentificated ? { display: "none" } : { display: "flex" }
              }
            >
              <NavLink to="/sign-up" className="nav__link">
                <SignUpSVG /> Sign up
              </NavLink>
              <NavLink to="/sign-in" className="nav__link">
                <SignInSVG /> Sign in
              </NavLink>
            </div>
          </nav>
        </div>

        <div
          className="privacy-area caption2"
          style={isAutentificated ? { display: "none" } : { display: "" }}
        >
          <div className="header__line"></div>
          <div className="privacy-area__content">
            <p>Our Site may use “cookies” to enhance User experience.</p>
            <NavLink to="/privacy" className="privacy">
              Privacy
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}
