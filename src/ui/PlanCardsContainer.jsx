// eslint-disable-next-line react/prop-types
function PlanCardsContainer({ children }) {
  return (
    <>
      <div className="plans w-full gap-5 max-[987px]:m-auto max-[987px]:w-fit max-sm:w-full max-sm:flex-col">
        {children}
      </div>
    </>
  );
}

export default PlanCardsContainer;
