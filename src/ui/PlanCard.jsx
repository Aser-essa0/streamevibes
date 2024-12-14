import { useNavigate, useSearchParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PlanCard({ title, description, MonthlyPrice }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");
  const YearlyPrice =
    Math.ceil(MonthlyPrice * 12 - MonthlyPrice * 0.1).toFixed(2) - 0.01;
  const price = plan == "yearly" ? YearlyPrice : MonthlyPrice;

  function handleClick() {
    navigate("/supscriptions");
  }

  return (
    <div className="h-[345px] max-w-[413.33px] space-y-10 rounded-[10px] border border-black-shade-5 bg-black-shade-3 p-10 max-sm:h-[275px] max-sm:max-w-full max-sm:space-y-[30px] max-sm:p-4">
      <div className="space-y-3">
        <p className="text-xl font-bold text-white max-sm:text-lg">{title}</p>
        <p className="max-sm:text-sm">{description}</p>
      </div>
      <p className="text-[30px] text-white max-sm:text-2xl">
        ${price}
        <span className="text-base text-gray-shade-1 max-sm:text-sm">
          /month
        </span>
      </p>
      <div className="flex h-[49px] w-[333.33px] items-center gap-3 text-white max-sm:w-full">
        <button
          onClick={handleClick}
          className="h-[49px] w-[160.67px] rounded-md bg-black-shade-2 px-5 py-[14px] text-sm font-semibold max-sm:px-2.5"
        >
          Start Free Trial
        </button>
        <button
          onClick={handleClick}
          className="h-[49px] w-[160.67px] rounded-md bg-red-shade-1 px-5 py-[14px] text-sm font-semibold max-sm:px-2.5"
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
}

export default PlanCard;
