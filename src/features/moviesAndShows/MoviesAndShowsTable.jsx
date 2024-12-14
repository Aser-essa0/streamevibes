/* eslint-disable react/prop-types */
import Scroll from "../../ui/Scroll";
import MovieShowCard from "./MovieShowCard";
import TiteledBorder from "../../ui/TiteledBorder";
import ScrollRow from "../../ui/ScrollRow";
import { formatDataInList } from "../../utils/formatDataInList";
import MovieShowFourImgsCard from "./MovieShowFourImgsCard";

function MoviesAndShowsTable({ type, data, setPlan, plan, isLoading }) {
  return (
    <>
      <TiteledBorder title={type} setPlan={setPlan} plan={plan}>
        <Scroll
          nextEl={`${type}nextbtn1`}
          prevEL={`${type}prevbtn1`}
          pagination={`${type}pag1`}
          id={`${type}Genres`}
        >
          <Scroll.Header title="Our Genres" paragraph="" className="mb-10" />
          <ScrollRow data={formatDataInList(data)} type={type}>
            <MovieShowFourImgsCard />
          </ScrollRow>
        </Scroll>

        <Scroll
          nextEl={`${type}nextbtn2`}
          prevEL={`${type}prevbtn2`}
          pagination={`${type}pag2`}
          topTen={true}
          id={`${type}Popular`}
        >
          <Scroll.Header
            title="Popular Top 10 In Genres"
            paragraph=""
            className="mb-10"
          />
          <ScrollRow data={formatDataInList(data?.slice(10))} type={type}>
            <MovieShowFourImgsCard />
          </ScrollRow>
        </Scroll>

        <Scroll
          nextEl={`${type}nextbtn3`}
          prevEL={`${type}prevbtn3`}
          pagination={`${type}pag3`}
          topTen={true}
          id={`${type}Trending`}
        >
          <Scroll.Header
            title={`Trending ${type} Now`}
            paragraph=""
            className="mb-10"
          />
          <ScrollRow data={data?.slice(5, 18)} type={type}>
            <MovieShowCard
              ShapeType="trending"
              type={type}
              isLoading={isLoading}
            />
          </ScrollRow>
        </Scroll>

        <Scroll
          nextEl={`${type}nextbtn4`}
          prevEL={`${type}prevbtn4`}
          pagination={`${type}pag4`}
          topTen={true}
          id={`${type}New`}
        >
          <Scroll.Header
            title={`New Releases ${type}`}
            paragraph=""
            className="mb-10"
          />
          <ScrollRow data={data?.slice(18, 31)} type={type}>
            <MovieShowCard
              ShapeType="releases"
              type={type}
              isLoading={isLoading}
            />
          </ScrollRow>
        </Scroll>

        <Scroll
          nextEl={`${type}nextbtn5`}
          prevEL={`${type}prevbtn5`}
          pagination={`${type}pag5`}
          topTen={true}
        >
          <Scroll.Header
            title={`Must - Watch ${type}`}
            paragraph=""
            className="mb-10"
          />
          <ScrollRow data={data?.slice(54, 64)} type={type}>
            <MovieShowCard
              ShapeType="suggestion"
              type={type}
              isLoading={isLoading}
            />
          </ScrollRow>
        </Scroll>
      </TiteledBorder>
    </>
  );
}

export default MoviesAndShowsTable;
