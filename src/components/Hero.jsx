import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className="bg-[#1D994A] w-full h-full">
            <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 py-6 md:py-12">
                <div className="w-full mt-10 max-w-[975px] flex flex-col gap-2">
                    <h1 className="font-gilroy font-semibold text-[40px] sm:text-[52px] md:text-[64px] leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[90px] text-white animate-scaleUp">
                        Boost Your Sports Betting Experience with{" "}
                        <span className="text-[#DBF024]">NaijaPunter</span>
                    </h1>
                    <p className="font-inter mt-2 font-medium leading-6 md:leading-[32px] text-[15px] text-white md:text-[20px] animate-slideInLeft">
                        Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos. Curabitur
                        tempus urna at turpis condimentum lobortis.
                    </p>
                    <Link
                        to="/all-predictions"
                        className="bg-[#DBF024] hover:bg-yellow-300 w-fit mt-4 md:mt-8 text-[#090909] py-3 md:py-5 px-7 md:px-10 rounded-[4px] font-medium text-sm leading-8"
                    >
                        Browse Predictions
                    </Link>
                </div>
            </div>
        </div>
    );
}
