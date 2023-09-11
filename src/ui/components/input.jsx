import { isEmpty } from "src/dict/lodash";

import "src/ui/styles/components/input.scss";

export function Input({ placeholder, type, id, style, field, value }) {
  const error = !isEmpty(field) && field.errorText();

  return (
    <>
      <input
        className={error ? "input input__error caption1" : "input caption1"}
        id={id}
        type={type}
        onChange={(e) => {
          field.onChange(e.target.value);
        }}
        style={style}
        value={value}
        placeholder={placeholder}
      />
      {!isEmpty(error) && (
        <div className="caption2" style={{ color: "#A4262C", height: "2px" }}>
          {error}
        </div>
      )}
    </>
  );
}
