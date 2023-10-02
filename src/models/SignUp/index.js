import { createEvent, createStore } from "effector";
import { createForm } from "effector-forms";
import { rules } from "src/dict/rules";
import { persist } from "effector-storage/local";

export const addRegisteredUserFn = createEvent();

export const $registeredUsers = createStore([]);
persist({ store: $registeredUsers, key: "registeredUsers" });

export const signUpForm = createForm({
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
    policy: {
      init: false,
      rules: [rules.requierd()],
    },
  },
  validateOn: ["submit"],
});
