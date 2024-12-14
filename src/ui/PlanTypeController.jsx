import { useSearchParams } from "react-router-dom";

function PlanTypeController() {
  const [searchParams, setSearchParams] = useSearchParams();
  const plan = searchParams.get("plan");

  function handleClick(plan) {
    searchParams.set("plan", plan);
    setSearchParams(searchParams);
  }

  return (
    <>
      <div className="flex h-[61px] w-[190px] items-center rounded-lg border border-black-shade-5 bg-black-shade-1 p-2 max-sm:mt-5">
        <button
          className={`h-[45px] w-[94px] ${plan !== "yearly" ? "rounded-md bg-black-shade-4 text-white" : ""}`}
          onClick={() => handleClick("monthly")}
        >
          Monthly
        </button>
        <button
          className={`h-[45px] w-[94px] ${plan === "yearly" ? "rounded-md bg-black-shade-4 text-white" : ""}`}
          onClick={() => handleClick("yearly")}
        >
          Yearly
        </button>
      </div>
    </>
  );
}

export default PlanTypeController;
