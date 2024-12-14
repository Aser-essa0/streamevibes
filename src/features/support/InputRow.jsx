// eslint-disable-next-line react/prop-types
function InputRow({ label, className, children }) {
  return (
    <div className={`flex flex-col gap-3 ${className} max-sm:col-span-2`}>
      <label className="font-semibold text-white" htmlFor={label}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default InputRow;
