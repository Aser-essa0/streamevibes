import Card from "../features/moviesAndShows/MovieShowFourImgsCard";
import Devices from "../ui/Devices";
import FAQs from "../ui/Faqs";
import HeroSection from "../ui/HeroSection";
import Plan from "../ui/Plan";
import ScrollRow from "../ui/ScrollRow";
import Scroll from "../ui/Scroll";
import SectionContainer from "../ui/SectionContainer";
import { formatDataInList } from "../utils/formatDataInList";
import { useMoviesData } from "../features/moviesAndShows/useMoviesData";

export default function Home() {
  const { data } = useMoviesData();

  return (
    <>
      <HeroSection />
      <SectionContainer className="mt-[120px] max-sm:mt-[80px]" id="categories">
        <Scroll
          nextEl={`homeNextbtn1`}
          prevEL={`homePrevbtn1`}
          pagination={`homePag1`}
        >
          <Scroll.Header title="Our Genres" paragraph="" className="mb-10" />
          <ScrollRow data={formatDataInList(data)}>
            <Card />
          </ScrollRow>
        </Scroll>
      </SectionContainer>
      <Devices />
      <FAQs />
      <Plan className="mt-[120px]" />
    </>
  );
}
