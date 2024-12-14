// eslint-disable-next-line react/prop-types
function Input({ id, placeHolder }) {
  return (
    <>
      <input
        className="w-full rounded-[10px] border border-black-shade-5 bg-black-shade-2 p-4 focus:outline-none"
        type="text"
        id={id}
        name={id}
        placeholder={placeHolder}
        required
      />
    </>
  );
}

export default Input;
