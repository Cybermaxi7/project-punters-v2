import React from "react";
import Button from "../components/Button";

const Newsletter = () => {
    return (
        <div className="w-full h-full items-center justify-center bg-[#010101] ">
            <div className=" w-full max-w-[768px] p-10 md:p-20 text-white text-center mx-auto flex justify-center flex-col gap-5">
                <h1 className="text-[36px] leading-[44px] font-inter">
                    Subscribe to our Newsletter
                </h1>
                <p className="text-[20px] font-inter">
                    Get tips and sport updates from us. We promise not to spam
                    you.
                </p>

                <div
                    className="flex gap-3 items-center
        justify-center w-full flex-col md:flex-row"
                >
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="input input-bordered flex-1 rounded w-full bg-[#111111] border-[#303030] text-[14px] px-3 py-4 "
                    />
                    <Button value={"Subscribe"} className="w-full md:w-fit" />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
