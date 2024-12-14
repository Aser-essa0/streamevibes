// eslint-disable-next-line react/prop-types
function TableData({ className, children }) {
  return (
    <td
      className={`border-[.5px] border-black-shade-5 bg-black-shade-2 p-6 text-start font-medium ${className}`}
    >
      {children}
    </td>
  );
}

export default TableData;
