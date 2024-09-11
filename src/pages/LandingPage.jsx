import BestBet from "../components/BestBet";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import PredictionsForYou from "../components/PredictionsForYou";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

export default function LandingPage() {
    return (
        <div className=" font-inter text-[14px]">
            <Hero />
            <PredictionsForYou />
            <BestBet />
            <Blog />
            <Footer />
        </div>
    );
}
