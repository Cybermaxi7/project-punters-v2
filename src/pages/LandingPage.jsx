import BestBet from "../components/BestBet";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Newsletter from "../components/NewsLetter";
import PredictionsForYou from "../components/PredictionsForYou";
import Footer from "../shared/Footer";

export default function LandingPage() {
  return (
    <div className=" font-inter text-[14px]">
      <Hero />
      <PredictionsForYou />
      <BestBet />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}
