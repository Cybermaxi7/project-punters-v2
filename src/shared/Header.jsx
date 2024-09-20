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
                <Link className="text-xl font-bold flex items-center" to="/">
                    {/* <img
                        src="/src/assets/logo.svg"
                        alt="Logo"
                        className="h-10"
                    />{" "} */}
                    <Logo />
                </Link>
            </div>

            {/* Centered Nav Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#121212]">
                    <li tabIndex={0}>
                        <Link
                            to="/#predictions-for-you"
                            className="hover:text-[#1D994A] hover:bg-[#1D994A]/10 duration-300 ease-in-out transition-colors"
                        >
                            Today's Prediction
                            <IoMdArrowDropdown />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/#best-bets"
                            className="hover:text-[#1D994A] hover:bg-[#1D994A]/10 duration-300 ease-in-out transition-colors"
                        >
                            Best Bets
                        </Link>
                    </li>
                    <li tabIndex={1}>
                        <Link
                            to="all-predictions"
                            className="hover:text-[#1D994A] hover:bg-[#1D994A]/10 duration-300 ease-in-out transition-colors"
                        >
                            All Predictions
                            <IoMdArrowDropdown />
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/game"
                            className="hover:text-[#1D994A] hover:bg-[#1D994A]/10 duration-300 ease-in-out transition-colors"
                        >
                            Games
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Hamburger for mobile */}
            <div className="navbar-end lg:hidden ">
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
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute z-50"
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
                        <li>
                            <Link to="/game/*">Games</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Browse Predictions Button */}
            <div className="navbar-end hidden lg:flex">
                <Link
                    className="bg-[#1D994A] text-white radius-md p-3 h-12 rounded-sm text-[16px] font-inter hover:bg-[#1D994A]/90"
                    to={"/all-predictions"}
                >
                    Browse Predictions
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
