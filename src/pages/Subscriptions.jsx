import Plan from "../ui/Plan";
import SubscriptionsTable from "../features/subscriptions/SubscriptionsTable";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import ShowPlans from "../features/subscriptions/ShowPlans";

const data = [
  {
    type: "Basic",
    Price: "$9.99/Month",
    Content:
      "Access to a wide selection of movies and shows, including some new releases.",
    Devices: "Watch on one device simultaneously",
    "Free Trail": "7 Days",
    "Cancel Anytime": "Yes",
    HDR: "No",
    "Dolby Atmos": "No",
    "Ad - Free": "No",
    "Offline Viewing": "No",
    "Family Sharing": "No",
  },
  {
    type: "Standard",
    Price: "$12.99/Month",
    Content:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    Devices: "Watch on Two device simultaneously",
    "Free Trail": "7 Days",
    "Cancel Anytime": "Yes",
    HDR: "Yes",
    "Dolby Atmos": "Yes",
    "Ad - Free": "Yes",
    "Offline Viewing": "Yes, for select titles.",
    "Family Sharing": "Yes, up to 5 family members.",
  },
  {
    type: "Premium",
    Price: "$14.99/Month",
    Content:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    Devices: "Watch on Four device simultaneously",
    "Free Trail": "7 Days",
    "Cancel Anytime": "Yes",
    HDR: "Yes",
    "Dolby Atmos": "Yes",
    "Ad - Free": "Yes",
    "Offline Viewing": "Yes, for all titles.",
    "Family Sharing": "Yes, up to 6 family members.",
  },
];

export default function Subscriptions() {
  return (
    <>
      <SectionContainer className="mt-[100px] max-md:mt-[40px]">
        <Plan />
      </SectionContainer>
      <SectionContainer className="mt-[100px] max-md:mt-[40px]">
        <SectionHeader
          title="Compare our plans and find the right one for you"
          paragraph="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
        />
        <SubscriptionsTable data={data} />
        <ShowPlans data={data} />
      </SectionContainer>
    </>
  );
}
