import { createForm } from "effector-forms";

// Проверки
const rules = {
  requierd: () => ({
    name: "required",
    validator: (value) => Boolean(value),
    errorText: "This field is required",
  }),
  minLenght: (min) => ({
    name: "minLength",
    validator: (value) => value.length >= min,
    errorText: String(min) + " characters minimum.",
  }),
};

// Определение формы
export const signUpForm = createForm({
  fields: {
    email: {
      // Изначальное значение поля
      init: "",
      // Проверки
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
