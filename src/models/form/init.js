import { sample } from "effector";
import { signUpForm } from "./";

sample({
  clock: signUpForm.formValidated,
  fn: (fields) => {
    console.log(fields);
  },
});
