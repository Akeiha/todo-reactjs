import { isEmpty } from "src/dict/lodash";

import "src/ui/styles/components/checkbox.scss";

export function Checkbox({
  children,
  placeholder,
  onChange,
  type,
  field,
  value,
  name,
}) {
  const error = !isEmpty(field) && field.errorText();

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          id="c1"
          checked={
            !isEmpty(field)
              ? type === "radio"
                ? name === field.value
                : field.value
              : value
          }
          type={type}
          name={name}
          onChange={() => {
            if (!isEmpty(field)) {
              type === "radio"
                ? field.onChange(name)
                : field.onChange(!field.value);
            } else {
              onChange();
            }
          }}
          placeholder={placeholder}
          value={value}
        />
        <label for="c1" className="caption1">
          {children}
        </label>
      </div>
      {!isEmpty(error) && (
        <div className="caption2" style={{ color: "#A4262C", height: "2px" }}>
          {error}
        </div>
      )}
    </>
  );
}
