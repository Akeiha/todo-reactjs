export const rules = {
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
