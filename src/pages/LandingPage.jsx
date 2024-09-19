import { Helmet } from "react-helmet-async";
import BestBet from "../components/BestBet";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Newsletter from "../components/NewsLetter";
import PredictionsForYou from "../components/PredictionsForYou";
import Footer from "../shared/Footer";

export default function LandingPage() {
    return (
        <div className=" font-inter text-[14px] overflow-x-hidden">
            <Helmet>
                <title>Naija Punters - Football Predictions</title>
                <meta
                    name="description"
                    content="Get the latest and most accurate football predictions on our landing page. Stay updated on the upcoming games and match predictions."
                />
            </Helmet>
            <Hero />
            <PredictionsForYou />
            <BestBet />
            <Blog />
            <Newsletter />
            <Footer />
        </div>
    );
}
