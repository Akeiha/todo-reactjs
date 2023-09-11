import "src/ui/styles/components/button.scss";

export function Button({ children, onClick, disabled, style, type, required }) {
  return (
    <button
      className="button subtitle3"
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
