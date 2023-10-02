import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signUpForm } from "src/models/SignUp";
import { useForm } from "effector-forms";
import { $isAutentificated } from "src/models/SignIn";
import { useUnit } from "effector-react";
import { Input, Checkbox, Button } from "src/ui/components";
import { EyeOffSVG, EyeSVG } from "src/ui/images/svg";

import "src/ui/styles/pages/sign-up.scss";

export function SignUpPage() {
  const [isVisiblePass, setVisiblePass] = useState(false);
  const { fields, submit, eachValid } = useForm(signUpForm);
  const isAutentificated = useUnit($isAutentificated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAutentificated) {
      navigate("/");
    }
  }, [isAutentificated]);

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <div className="sign-up">
      <form onSubmit={onSubmit}>
        <div className="sign-up__content">
          <h3 className="sign-up__title h3">Sign up</h3>

          <div className="sign-up__inputs">
            <div style={{ marginBottom: "22px" }}>
              <p
                className="subtitle3"
                style={{ color: "var(--black2)", marginBottom: "6px" }}
              >
                Email
              </p>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                field={fields.email}
                value={fields.email.value}
              />
            </div>

            <div>
              <p
                className="subtitle3"
                style={{ color: "var(--black2)", marginBottom: "6px" }}
              >
                Password
              </p>
              <div className="sign-up__password">
                <Input
                  type={isVisiblePass ? "text" : "password"}
                  placeholder="Password"
                  field={fields.password}
                  value={fields.password.value}
                />
                <button
                  type="button"
                  onClick={() => setVisiblePass(!isVisiblePass)}
                >
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
            <div style={{ marginTop: "24px" }}>
              <Checkbox
                type="checkbox"
                field={fields.policy}
                value={fields.policy.value}
              >
                I agree to the Bit{" "}
                <NavLink to="/privacy" style={{ color: "var(--primary)" }}>
                  Privacy Policy
                </NavLink>
              </Checkbox>
            </div>
          </div>

          <Button type="submit" disabled={!eachValid}>
            Sign up
          </Button>
          <p
            className="caption1 sign-up__desc"
            style={{ color: "var(--black2)" }}
          >
            Already on Bit?{" "}
            <NavLink to="/sign-in" style={{ color: "var(--primary)" }}>
              Sign in
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}
