import { formatDate } from "../utils/formatDate";

// eslint-disable-next-line react/prop-types
function Release({ date }) {
  return (
    <div className="col-span-2 flex h-[28px] w-full items-center justify-center gap-0.5 rounded-[51px] border border-black-shade-5 bg-black-shade-2 p-1 text-xs font-medium text-gray-shade-4">
      <p>Released at {formatDate(date)}</p>
    </div>
  );
}

export default Release;
