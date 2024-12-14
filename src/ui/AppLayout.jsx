import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Ad from "./Ad";
import { Suspense } from "react";
import Spinner from "./Spinner";
import { useMoviesData } from "../features/moviesAndShows/useMoviesData";
import ScrollToTop from "./ScrollToTop";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AppLayout() {
  const { data } = useMoviesData();

  return (
    <>
      <ScrollToTop />
      <SkeletonTheme baseColor="#313131" highlightColor="#515050">
        <div className="px-[80px] max-sm:px-5">
          <Header />
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
          <Ad data={data} />
        </div>
        <Footer />
      </SkeletonTheme>
    </>
  );
}
export default AppLayout;
