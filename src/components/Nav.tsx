import { useEffect, useState } from "react";
import tmdb from "../assets/TMDB.png";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div
      className={`fixed top-0 z-10 h-[90px] w-full p-2 transition-all ${
        showNav && "bg-black"
      } `}
    >
      <div className="flex items-center justify-between p-2">
        <Link to="/movie">
          <img
            src={tmdb}
            alt="TMDB"
            className="fixed top-[10px] h-16 w-16 cursor-pointer"
          />
        </Link>
        <Link to="/profile">
          <img
            src={avatar}
            alt="avatar"
            className="fixed right-12 top-[30px] h-8 w-8 cursor-pointer bg-white"
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
