import { FaStar } from "react-icons/fa6";
import { IoIosStarHalf } from "react-icons/io";

// eslint-disable-next-line react/prop-types
function Stars({ rate }) {
  const stars = Array.from({ length: rate }, (num) => num++);

  return (
    <div className="flex">
      {stars?.map((el, idx) => {
        return (
          <FaStar
            key={idx}
            className="h-[14px] w-[14px] text-red-shade-1 max-sm:h-[10px] max-sm:w-[10px]"
          />
        );
      })}
      {rate % 1 >= 0.5 && <IoIosStarHalf className="text-red-shade-1" />}
    </div>
  );
}

export default Stars;
