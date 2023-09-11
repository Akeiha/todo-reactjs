import { isEmpty } from "src/dict/lodash";

import "src/ui/styles/components/checkbox.scss";

export function Checkbox({ children, placeholder, type, field, value }) {
  const error = !isEmpty(field) && field.errorText();

  return (
    <>
      <div>
        <input
          id="c1"
          checked={field.value}
          type={type}
          onChange={() => {
            field.onChange(!field.value);
          }}
          placeholder={placeholder}
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
