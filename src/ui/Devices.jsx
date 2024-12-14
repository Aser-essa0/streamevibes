import { RiSmartphoneFill } from "react-icons/ri";
import Device from "./Device";
import DevicesContainer from "./DevicesContainer";
import SectionHeader from "./SectionHeader";
import { FaTabletButton } from "react-icons/fa6";
import { IoGameController, IoTv } from "react-icons/io5";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { BsHeadsetVr } from "react-icons/bs";
import SectionContainer from "./SectionContainer";

function Devices() {
  return (
    <SectionContainer id="devices" className="mt-[120px] max-sm:mt-[80px]">
      <SectionHeader
        title="We Provide you streaming experience across various devices."
        paragraph="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
      />
      <DevicesContainer>
        <Device name="Smartphones">
          <RiSmartphoneFill className="h-[30px] w-[30px] text-red-shade-1" />
        </Device>

        <Device name="Tablet">
          <FaTabletButton className="h-[30px] w-[30px] text-red-shade-1" />
        </Device>

        <Device name="Smart TV">
          <IoTv className="h-[30px] w-[30px] text-red-shade-1" />
        </Device>

        <Device name="Laptops">
          <MdOutlineLaptopChromebook className="h-[30px] w-[30px] text-red-shade-1" />
        </Device>

        <Device name="Gaming Consoles">
          <IoGameController className="h-[30px] w-[30px] text-red-shade-1" />
        </Device>

        <Device name="VR Headsets">
          <BsHeadsetVr className="h-[30px] w-[30px] text-red-shade-1" />
        </Device>
      </DevicesContainer>
    </SectionContainer>
  );
}

export default Devices;
