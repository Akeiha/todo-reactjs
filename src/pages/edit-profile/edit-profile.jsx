import { useEffect } from "react";
import { useUnit } from "effector-react";
import { isEmpty } from "src/dict/lodash";
import {
  Button,
  Checkbox,
  DateInput,
  Input,
  UploadImageInput,
} from "src/ui/components";
import { CalendarIconSVG, CrossSVG, SuccessSVG } from "src/ui/images/svg";
import {
  $isEditedInfoSave,
  $userInfo,
  editUserInfoForm,
  setStateEditedInfoFn,
} from "src/models/UserInfo";
import { useForm } from "effector-forms";

import "src/ui/styles/pages/edit-profile.scss";

export function EditProfilePage() {
  const { fields, submit, isDirty } = useForm(editUserInfoForm);

  const [isEditedInfoSave] = useUnit([$isEditedInfoSave]);

  const messageBarClassName = ["message-bar"];

  if (isEditedInfoSave) {
    messageBarClassName.push("message-bar__opened");
  }

  const { email, userPhoto, username, userBirthday, userGender } =
    useUnit($userInfo);

  const name = isEmpty(username)
    ? email.slice(0, 2)
    : username
        .split(/\s+/)
        .map((word) => word.slice(0, 1))
        .join("");

  useEffect(() => {
    editUserInfoForm.setInitialForm({
      userPhoto,
      username,
      userBirthday,
      userGender,
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <div className="edit-profile">
      <div className="edit-profile__container">
        <div className={messageBarClassName.join(" ")}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <SuccessSVG />
            <p className="caption2" style={{ color: "var(--black2)" }}>
              Message about the state of this view
            </p>
          </div>
          <button
            onClick={() => setStateEditedInfoFn()}
            style={{ cursor: "pointer" }}
          >
            <CrossSVG />
          </button>
        </div>

        <h3 className="edit-profile__title h3">Edit profile</h3>
        <div className="edit-profile__user">
          <div
            className="profile-photo mobile-photo"
            style={{
              marginBottom: "0",
            }}
          >
            {isEmpty(userPhoto) || isEmpty(fields.userPhoto.value) ? (
              <p className="body2">{name.toUpperCase()}</p>
            ) : (
              <img
                className="edit-profile-photo"
                src={fields.userPhoto.value}
                alt=""
              />
            )}
          </div>

          <p
            className="profile-email caption1"
            style={{
              color: "var(--gray3)",
              textAlign: "center",
              marginBottom: "0",
            }}
          >
            {email}
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="edit-form">
            <p className="edit-form__label">Profile photo</p>
            <UploadImageInput setFile={fields.userPhoto.onChange} />
          </div>

          <div className="edit-form">
            <p className="edit-form__label">Full name</p>
            <Input
              placeholder="Full name"
              field={fields.username}
              value={fields.username.value}
            />
          </div>

          <div className="edit-form">
            <p className="edit-form__label">Birthday</p>
            <div style={{ position: "relative" }}>
              <DateInput
                field={fields.userBirthday}
                value={
                  !isEmpty(fields.userBirthday.value)
                    ? new Date(fields.userBirthday.value)
                    : ""
                }
              />
              <div className="data-svg">
                <CalendarIconSVG />
              </div>
            </div>
          </div>

          <div className="edit-form">
            <p className="edit-form__label">Gender</p>{" "}
            <div className="caption1 edit-form__gender">
              <Checkbox type="radio" name="Male" field={fields.userGender} />
              Male
            </div>
            <div className="caption1 edit-form__gender">
              <Checkbox type="radio" name="Famale" field={fields.userGender} />
              Famale
            </div>
            <div className="caption1 edit-form__gender">
              <Checkbox type="radio" name="Custom" field={fields.userGender} />
              Custom
            </div>
          </div>

          <div className="save-button">
            <Button type="submit" disabled={!isDirty}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
