import HeroBackground from "./HeroBackground";
import LogoIcon from "./LogoIcon";
import Description from "./Description";
import Button from "./Button";
import { FaPlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/movies&shows");
  }

  return (
    <>
      <div className="mb-[60px] w-full max-sm:mb-10">
        <HeroBackground />
        <LogoIcon />
        <Description />
        <div className="mx-auto mt-10 w-fit max-sm:mt-[30px]">
          <Button className="h-[52px]" onClick={handleClick}>
            <FaPlay className="h-6 w-6" />
            Start Watching Now
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
