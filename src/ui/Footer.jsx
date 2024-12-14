import { memo } from "react";
import Lists from "./Lists";

const Footer = memo(function Footer() {
  return (
    <>
      <div className="mt-[120px] h-[414px] w-full overflow-hidden bg-black-shade-1 p-20 pb-10 max-lg:h-[545px] max-sm:mt-[80px] max-sm:h-[668px] max-sm:px-5 max-sm:py-[50px] max-sm:pb-5">
        <Lists />
        <div className="flex w-[1280px] items-center justify-between border-t border-black-shade-5 pt-5 max-lg:h-[82px] max-lg:w-full max-lg:flex-col max-lg:items-baseline max-lg:gap-5">
          <p className="text-sm">@2023 streamvib, All Rights Reserved</p>
          <ul className="flex h-[21px] w-[321px] items-center divide-x divide-black-shade-5 text-nowrap text-sm">
            <li className="pr-4">Terms of Use</li>
            <li className="px-4">Privacy Policy</li>
            <li className="pl-4">Cookie Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
});

export default Footer;
