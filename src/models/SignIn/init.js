import { sample } from "effector";
import { $isAutentificated, signInForm, userLogInFn, userLogOutFn } from ".";
import { editUserInfoFn } from "../UserInfo";

$isAutentificated.on(userLogInFn, () => true).on(userLogOutFn, () => false);

sample({
  clock: signInForm.formValidated,
  target: [userLogInFn, editUserInfoFn],
});
