// eslint-disable-next-line react/prop-types
function TableRow({ children }) {
  return (
    <tr className={`grid grid-cols-4 border-black-shade-5`}>{children}</tr>
  );
}

export default TableRow;
