import SectionHeader from "./SectionHeader";
import PlanCard from "./PlanCard";
import PlanTypeController from "./PlanTypeController";
import PlanCardsContainer from "./PlanCardsContainer";
import SectionContainer from "./SectionContainer";

// eslint-disable-next-line react/prop-types
function Plan({ className }) {
  return (
    <SectionContainer id="pricing" className={`max-sm:mt-[80px] ${className}`}>
      <SectionHeader
        title="What are the StreamVibe payment methods?"
        paragraph="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      >
        <PlanTypeController />
      </SectionHeader>

      <PlanCardsContainer>
        <PlanCard
          title="Basic Plan"
          description="Enjoy an extensive library of movies and shows, featuring a range of
          content, including recently released titles."
          MonthlyPrice={9.99}
        />
        <PlanCard
          title="Standard Plan"
          description="Access to a wider selection of movies and shows, including most new releases and exclusive content"
          MonthlyPrice={12.99}
        />
        <PlanCard
          title="Premium Plan"
          description="Access to a widest selection of movies and shows, including all new releases and Offline Viewing"
          MonthlyPrice={14.99}
        />
      </PlanCardsContainer>
    </SectionContainer>
  );
}

export default Plan;
