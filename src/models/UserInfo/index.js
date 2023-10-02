import { createEvent, createStore } from "effector";
import { createForm } from "effector-forms";
import { persist } from "effector-storage/local";

export const setStateEditedInfoFn = createEvent();

export const $isEditedInfoSave = createStore(false);

export const editUserInfoFn = createEvent();

export const $userInfo = createStore({
  username: "",
  userPhoto: "",
  userBirthday: "",
  userGender: "",
  email: "",
});
persist({ store: $userInfo, key: "userInfo" });

export const editUserInfoForm = createForm({
  fields: {
    userPhoto: {
      init: "",
    },
    username: {
      init: "",
    },
    userBirthday: {
      init: "",
    },
    userGender: {
      init: "",
    },
  },
  validateOn: ["submit"],
});
