// eslint-disable-next-line react/prop-types
function TableHeader({ className, children }) {
  return (
    <th
      className={`border-[.5px] border-black-shade-5 bg-black-shade-1 p-6 text-start text-lg font-semibold text-white ${className}`}
    >
      {children}
    </th>
  );
}

export default TableHeader;
