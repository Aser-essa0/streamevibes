// eslint-disable-next-line react/prop-types
function List({ title, children }) {
  return (
    <div className="h-[173px] w-[196.7px] max-lg:h-fit">
      <p className="mb-5 text-lg font-semibold text-white max-sm:text-base">
        {title}
      </p>
      <ul className="flex flex-col justify-center gap-2.5 max-sm:text-sm">
        {children}
      </ul>
    </div>
  );
}

export default List;
