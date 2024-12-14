// eslint-disable-next-line react/prop-types
function Button({ onClick, className, children }) {
  return (
    <button
      onClick={() => onClick()}
      type="button"
      className={`flex items-center justify-center gap-1 rounded-lg bg-red-shade-1 px-[25px] text-sm font-semibold text-white ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
