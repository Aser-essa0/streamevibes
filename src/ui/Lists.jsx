import List from "./List";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { Offset } from "../utils/offset";
import { Link } from "react-router-dom";

function Lists() {
  return (
    <div className="mb-20 grid grid-cols-6 gap-y-[30px] max-lg:mb-[50px] max-lg:grid-cols-4 max-sm:grid-cols-2">
      <List title="Home">
        <HashLink
          to="/#categories"
          duration={500}
          smooth
          className="cursor-pointer"
          scroll={(el) => Offset(el, -30)}
        >
          Categories
        </HashLink>
        <HashLink
          to="/#devices"
          duration={500}
          smooth
          scroll={(el) => Offset(el, -30)}
          className="cursor-pointer"
        >
          Devices
        </HashLink>
        <HashLink
          to="/#pricing"
          duration={500}
          smooth
          scroll={(el) => Offset(el, -30)}
          className="cursor-pointer"
        >
          Pricing
        </HashLink>
        <HashLink
          to="/#faq"
          duration={500}
          smooth
          scroll={(el) => Offset(el, -30)}
          className="cursor-pointer"
        >
          FAQ
        </HashLink>
      </List>
      <List title="Movies">
        <HashLink
          to="/movies&shows#movieGenres"
          smooth
          scroll={(el) => Offset(el, -100)}
        >
          Gernes
        </HashLink>
        <HashLink
          to="/movies&shows#movieTrending"
          smooth
          scroll={(el) => Offset(el, -30)}
        >
          Trending
        </HashLink>
        <HashLink
          to="/movies&shows#movieNew"
          smooth
          scroll={(el) => Offset(el, -30)}
        >
          New Release
        </HashLink>
        <HashLink
          to="/movies&shows#moviePopular"
          smooth
          scroll={(el) => Offset(el, -30)}
        >
          Popular
        </HashLink>
      </List>
      <List title="Shows">
        <HashLink
          to="/movies&shows#showGenres"
          smooth
          scroll={(el) => Offset(el, -100)}
        >
          Gernes
        </HashLink>
        <HashLink
          to="/movies&shows#showTrending"
          smooth
          scroll={(el) => Offset(el, -30)}
        >
          Trending
        </HashLink>
        <HashLink
          to="/movies&shows#showNew"
          smooth
          scroll={(el) => Offset(el, -30)}
        >
          New Release
        </HashLink>
        <HashLink
          to="/movies&shows#showPopular"
          smooth
          scroll={(el) => Offset(el, -30)}
        >
          Popular
        </HashLink>
      </List>
      <List title="Support">
        <HashLink to="/support" smooth>
          Contact Us
        </HashLink>
      </List>
      <List title="Subscription">
        <HashLink
          to="/supscriptions#pricing"
          smooth
          scroll={(el) => Offset(el, -50)}
        >
          Plans
        </HashLink>
        <HashLink
          to="/supscriptions#subscription"
          smooth
          scroll={(el) => Offset(el, -30)}
        >
          Subscription
        </HashLink>
      </List>
      <List title="Connect With Us">
        <div className="flex items-center gap-2.5">
          <Link
            to="https://www.facebook.com/profile.php?id=100004553357437"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-[10px] border border-black-shade-4 bg-black-shade-2"
            target="_blank"
          >
            <FaFacebook className="h-5 w-5 text-white" />
          </Link>
          <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[10px] border border-black-shade-4 bg-black-shade-2">
            <FaTwitter className="h-5 w-5 text-white" />
          </span>
          <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[10px] border border-black-shade-4 bg-black-shade-2">
            <FaLinkedin className="h-5 w-5 text-white" />
          </span>
        </div>
      </List>
    </div>
  );
}

export default Lists;
