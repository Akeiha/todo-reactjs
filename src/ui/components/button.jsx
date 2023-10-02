import { isEmpty } from "src/dict/lodash";

import "src/ui/styles/components/button.scss";

export function Button({
  children,
  className,
  onClick,
  disabled,
  style,
  type,
  required,
}) {
  const buttonClassName = ["button", "subtitle3"];

  if (!isEmpty(className)) {
    buttonClassName.push(className);
  }

  return (
    <button
      className={buttonClassName.join(" ")}
      onClick={onClick}
      disabled={disabled}
      style={style}
      type={type}
      required={required}
    >
      {children}
    </button>
  );
}
