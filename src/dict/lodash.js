export const isEmpty = (obj) =>
  [Object, Array].includes((obj || {}).constructor) &&
  Object.entries(obj || {}).length === 0;
