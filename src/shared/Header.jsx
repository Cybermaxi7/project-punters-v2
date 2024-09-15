import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import { useEffect } from "react";

const Navbar = () => {
    const location = useLocation();

    useEffect(() => {
        if (
            location.hash === "#best-bets" ||
            location.hash === "#predictions-for-you"
        ) {
            const bestBetsSection = document.getElementById("best-bets");
            if (bestBetsSection) {
                bestBetsSection.scrollIntoView({ behavior: "smooth" });
            }
        }
        if (location.hash === "#predictions-for-you") {
            const bestBetsSection = document.getElementById(
                "predictions-for-you"
            );
            if (bestBetsSection) {
                bestBetsSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <nav className="navbar bg-white shadow-md py-4 w-full max-w-[1440px] mx-auto ">
            {/* Logo */}
            <div className="navbar-start">
                <a className="text-xl font-bold flex items-center" href="/">
                    {/* <img
                        src="/src/assets/logo.svg"
                        alt="Logo"
                        className="h-10"
                    />{" "} */}
                    <Logo />
                </a>
            </div>

            {/* Centered Nav Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#121212]">
                    {/* Dropdown 1 */}
                    <li tabIndex={0}>
                        <Link to="/#predictions-for-you">
                            Today's Prediction
                            <IoMdArrowDropdown />
                        </Link>
                        <ul className="p-2 hidden">
                            {/* <li>
                <a href="/today">Option 1</a>
              </li>
              <li>
                <a href="/today">Option 2</a>
              </li> */}
                        </ul>
                    </li>
                    <li>
                        <Link to="/#best-bets">Best Bets</Link>
                    </li>

                    {/* Dropdown 2 */}
                    <li tabIndex={1}>
                        <Link to="all-predictions">
                            All Predictions
                            <IoMdArrowDropdown />
                        </Link>
                        <ul className="p-2 hidden">
                            {/* <li>
                <a href="/predictions">Option 1</a>
              </li>
              <li>
                <a href="/predictions">Option 2</a>
              </li> */}
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Hamburger for mobile */}
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/#predictions-for-you">
                                Today's Prediction
                            </Link>
                        </li>
                        <li>
                            <Link to="/#best-bets">Best Bets</Link>
                        </li>
                        <li>
                            <Link to="/all-predictions">All Predictions</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Browse Predictions Button */}
            <div className="navbar-end hidden lg:flex">
                {/* <a
          href="/browse"
          className="btn bg-[#1D994A] text-[#f9f9f9] outline-none border-none"
        >
          Browse Predictions
        </a> */}
                <Link
                    className="bg-[#1D994A] text-white radius-md p-3  h-12 rounded-sm text-[16px] font-inter hover:bg-[#1D994A]/90"
                    to={"/all-predictions"}
                >
                    Browse Predictions
                </Link>{" "}
            </div>
        </nav>
    );
};

export default Navbar;
