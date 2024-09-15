import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className=" bg-[#010101] text-white ">
            <div className="p-12 w-full max-w-[1440px] mx-auto ">
                <div className="LOGO flex justify-between flex-col md:flex-row ">
                    {/* <h1 className="leading-[37.2px] font-Geist">LOGO</h1> */}
                    <img src="/src/assets/logo.svg" alt="" />
                    <div className="SOCIALICONS flex gap-4 font-inter">
                        <a href="#">Today's Bet</a>
                        <a href="#">Best Bet</a>
                        <a href="#">All Prediction</a>
                    </div>
                </div>
                <div className="right-side flex justify-between flex-col md:flex-row">
                    <div className="py-4 flex gap-1 font-inter">
                        <h3>Make smarter betting choices with</h3>
                        <span className="text-[#1D994A]"> NaijaPunters</span>
                    </div>
                    <div className="flex gap-3 py-4">
                        <div className="bg-[#111111] rounded p-2 inline-flex justify-center items-center">
                            <FaFacebook />
                        </div>
                        <div className="bg-[#111111] rounded p-2 inline-flex justify-center items-center">
                            <AiFillInstagram />
                        </div>
                        <div className="bg-[#111111] rounded p-2 inline-flex justify-center items-center">
                            <RiTwitterXFill />
                        </div>
                        <div className="bg-[#111111] rounded p-2 inline-flex justify-center items-center">
                            <RiWhatsappFill />
                        </div>
                        <div className="bg-[#111111] rounded p-2 inline-flex justify-center items-center">
                            <PiLinkedinLogoFill />
                        </div>
                    </div>
                </div>
                <div className="w-full border-[#303030] border mt-10 mb-3"></div>
                <p className="flex items-center gap-1 font-inter text-[14px] text-[#929292]">
                    <AiOutlineCopyrightCircle /> 2024 NaijaPunters
                </p>
            </div>
        </footer>
    );
}
