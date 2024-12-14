import { useState } from "react";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function DropDownList() {
  const [flag, setFlag] = useState("EG");
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex flex-col">
      <ul
        className="flex h-[53px] w-[78px] cursor-pointer items-center justify-center gap-1 rounded-md border border-black-shade-5 bg-black-shade-2 px-2"
        onClick={() => setOpen((open) => !open)}
      >
        {flag === "EG" && (
          <li>
            <img src="./egypt.png" className="h-6 w-[38px]" />
          </li>
        )}
        {flag === "USA" && (
          <li>
            <img src="./usa.png" className="h-6 w-[38px]" />
          </li>
        )}
        {open ? (
          <MdKeyboardArrowUp className="h-5 w-5" />
        ) : (
          <MdKeyboardArrowDown className="h-5 w-5" />
        )}
      </ul>
      {open && (
        <>
          <ul className="absolute bottom-[-150%] flex w-full cursor-pointer flex-col items-center gap-2 rounded-md border border-black-shade-5 bg-black-shade-2 p-2">
            <li
              onClick={() => {
                setFlag("EG");
                setOpen(false);
              }}
            >
              <img src="./egypt.png" className="h-6 w-[38px]" />
            </li>
            <li
              onClick={() => {
                setFlag("USA");
                setOpen(false);
              }}
            >
              <img src="./usa.png" className="h-6 w-[38px]" />
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default DropDownList;
