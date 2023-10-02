import { createEvent, createStore } from "effector";
import { createForm } from "effector-forms";
import { rules } from "src/dict/rules";
import { persist } from "effector-storage/local";

export const userLogInFn = createEvent();
export const userLogOutFn = createEvent();

export const $isAutentificated = createStore(false);
persist({ store: $isAutentificated, key: "isAutentificated" });

export const signInForm = createForm({
  fields: {
    email: {
      init: "",
      rules: [
        rules.requierd(),
        {
          name: "email",
          validator: (value) => /\S+@\S+\.\S+/.test(value),
          errorText: "Please enter a valid email format.",
        },
      ],
    },
    password: {
      init: "",
      rules: [rules.requierd(), rules.minLenght(4)],
    },
  },
  validateOn: ["submit"],
});
