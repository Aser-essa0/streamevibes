import ScrollToTop from "./ScrollToTop";

function Spinner() {
  return (
    <>
      <ScrollToTop />

      <div className="h-screen w-full">
        <div className="mt-[160px] flex w-full items-center justify-center">
          <img
            src="/loading.png"
            className="loading h-[250px] w-[250px] animate-spin-slow"
          />
          <img src="/play.png" className="absolute h-[55px] w-[50px]" />
        </div>
      </div>
    </>
  );
}

export default Spinner;
