import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <ul className="flex h-[60px] items-center justify-evenly gap-4 rounded-[10px] border-[3px] border-black-shade-4 bg-black-shade-2 p-2 text-[14px] max-md:hidden">
      <li>
        <NavLink to={"/"} className={"px-5 py-2.5"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/movies&shows"} className={"px-5 py-2.5"}>
          Movies & Shows
        </NavLink>
      </li>
      <li>
        <NavLink to={"/support"} className={"px-5 py-2.5"}>
          Support
        </NavLink>
      </li>
      <li>
        <NavLink to={"/supscriptions"} className={"px-5 py-2.5"}>
          Subscriptions
        </NavLink>
      </li>
    </ul>
  );
}

export default NavigationBar;
