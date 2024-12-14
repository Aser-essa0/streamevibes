import NavigationBar from "./NavigationBar";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiBars3BottomRight } from "react-icons/hi2";
import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import useOutSideClick from "../hooks/useOutSideClick";
import { createPortal } from "react-dom";
import Search from "./Search";

const Header = memo(function Header() {
  const { ref, open, setOpen } = useOutSideClick();
  return (
    <>
      <header className="flex h-[98px] items-center justify-between max-sm:h-[102px] max-sm:py-10">
        <Link to={"/"}>
          <img src="/Logo.png" width={165.83} height={50} />
        </Link>
        <NavigationBar />
        <div className="flex h-6 w-[100px] items-center gap-[14px] max-md:hidden">
          <Search />
          <IoIosNotificationsOutline className="h-6 w-6 text-white" />
        </div>
        <div className="relative md:hidden">
          <span
            className="flex h-[54px] w-[54px] items-center justify-center rounded-[10px] border border-black-shade-4 bg-black-shade-2"
            onClick={() => setOpen((open) => !open)}
            ref={ref}
          >
            <HiBars3BottomRight className="h-6 w-6 cursor-pointer text-white" />
          </span>

          {createPortal(
            open && (
              <ul className="absolute right-4 top-[80px] z-50 flex h-[211px] w-[160px] flex-col overflow-hidden rounded-md border border-black-shade-5 bg-black-shade-1">
                <li className="flex h-full w-full items-center border-b border-black-shade-5 p-1">
                  <NavLink to="/" className="h-[45px] w-full px-3 py-2">
                    Home
                  </NavLink>
                </li>
                <li className="flex h-full w-full items-center border-b border-black-shade-5 p-1">
                  <NavLink
                    to="/movies&shows"
                    className="h-[45px] w-full px-3 py-2"
                  >
                    movies&shows
                  </NavLink>
                </li>
                <li className="flex h-full w-full items-center border-b border-black-shade-5 p-1">
                  <NavLink to="/support" className="h-[45px] w-full px-3 py-2">
                    Support
                  </NavLink>
                </li>
                <li className="flex h-full w-full items-center border-b border-black-shade-5 p-1">
                  <NavLink
                    to="/supscriptions"
                    className="h-[45px] w-full px-3 py-2"
                  >
                    Subscriptions
                  </NavLink>
                </li>
              </ul>
            ),
            document.body,
          )}
        </div>
      </header>
    </>
  );
});

export default Header;
