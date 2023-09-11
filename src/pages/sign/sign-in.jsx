import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Input, Button } from "src/ui/components";
import { EyeOffSVG, EyeSVG } from "src/ui/images/svg";

import "src/ui/styles/pages/sign-in.scss";

export function SignInPage() {
  const [isVisiblePass, setVisiblePass] = useState(false);

  return (
    <div className="sign-in">
      <div className="sign-in__content">
        <h3 className="sign-in__title h3">Sign in</h3>
        <form
          className="sign-in__inputs"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <p
              className="subtitle3"
              style={{ color: "var(--black2)", marginBottom: "6px" }}
            >
              Email
            </p>
            <Input type="email" placeholder="Email" required></Input>
          </div>

          <div>
            <p
              className="subtitle3"
              style={{ color: "var(--black2)", marginBottom: "6px" }}
            >
              Password
            </p>

            <div className="sign-in__password">
              <Input
                type={isVisiblePass ? "text" : "password"}
                placeholder="Password"
                minlength="4"
                required
              />

              <button onClick={() => setVisiblePass(!isVisiblePass)}>
                <div
                  style={
                    isVisiblePass ? { display: "block" } : { display: "none" }
                  }
                  title="Hide password"
                >
                  <EyeOffSVG />
                </div>
                <div
                  style={
                    isVisiblePass ? { display: "none" } : { display: "block" }
                  }
                  title="Show password"
                >
                  <EyeSVG />
                </div>
              </button>
            </div>
          </div>
        </form>
        <Button style={{ marginBottom: "26px" }}>Sign in</Button>
        <NavLink className="caption1" style={{ color: "var(--primary)" }}>
          Forgot password?
        </NavLink>
        <p className="caption1" style={{ color: "var(--black2)" }}>
          Don’t have an account?{" "}
          <NavLink to="/sign-up" style={{ color: "var(--primary)" }}>
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
}
