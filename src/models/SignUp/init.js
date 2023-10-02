import { sample } from "effector";
import { $registeredUsers, addRegisteredUserFn, signUpForm } from ".";
import { userLogInFn } from "../SignIn";
import { editUserInfoFn } from "../UserInfo";

$registeredUsers.on(addRegisteredUserFn, (store, user) => [...store, user]);

sample({
  clock: signUpForm.formValidated,
  fn: ({ email, password }) => ({ email, password }),
  target: [userLogInFn, addRegisteredUserFn, editUserInfoFn],
});
