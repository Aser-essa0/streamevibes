import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Button from "../../ui/Button";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
function ReviewForm({ setIsWriteReview }) {
  const [userName, setUserName] = useState("");
  const [userReview, setUserReview] = useState("");
  const [snedForm, setSnedForm] = useState(false);
  const [fullStar, setFullStar] = useState(0);
  const starsArr = Array.from({ length: 5 - fullStar }, (num) => num++);
  const FullStarsArr = Array.from({ length: fullStar }, (num) => num++);

  function handleClickStar(rate) {
    setFullStar(rate);
  }

  async function handleClick() {
    setSnedForm(true);
    if (FullStarsArr && userName.length > 0) {
      setIsWriteReview(false);
    }
    toast.success("Your Review Is Send Successfully");
    setUserName("");
    setUserReview("");
    setFullStar(0);
  }

  return (
    <form className="h-[223px] rounded-xl border border-black-shade-5 bg-black-shade-2 p-[20px]">
      <input
        type="text"
        placeholder="Your Name"
        value={userName}
        className="mb-2 h-[30px] w-full rounded-[8px] border border-black-shade-5 bg-transparent p-3 text-sm focus:outline-none"
        onChange={(e) => setUserName(e.target.value)}
      />
      {userName?.length <= 0 && snedForm && (
        <p className="mx-2 mb-2 text-xs text-red-500">Please Enter Your Name</p>
      )}
      <textarea
        placeholder="Your Review"
        rows={3}
        value={userReview}
        className="mb-2 w-full resize-none rounded-[8px] border border-black-shade-5 bg-transparent p-3 text-sm focus:outline-none"
        onChange={(e) => setUserReview(e.target.value)}
      />
      <div className="flex justify-between">
        <div className="flex items-center">
          {FullStarsArr?.map((_, idx) => {
            return (
              <FaStar
                key={idx}
                className="h-[14px] w-[14px] cursor-pointer text-red-shade-1 max-sm:h-[10px] max-sm:w-[10px]"
                onClick={() => handleClickStar(idx + 1)}
              />
            );
          })}
          {starsArr?.map((_, idx) => {
            return (
              <FaRegStar
                key={idx}
                className="h-[14px] w-[14px] cursor-pointer text-red-shade-1 max-sm:h-[10px] max-sm:w-[10px]"
                onClick={() => handleClickStar(idx + 1)}
              />
            );
          })}
        </div>
        <Button className={"h-[24px] rounded-sm"} onClick={handleClick}>
          Send
        </Button>
      </div>
    </form>
  );
}

export default ReviewForm;
