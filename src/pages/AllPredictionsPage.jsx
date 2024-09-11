import AllPredictions from "../components/AllPredictions";
import Blog from "../components/Blog";
import HeroPredictions from "../components/HeroPredictions";
import NewsLetter from "../components/NewsLetter";
import Header from "../shared/Header";

export default function AllPredictionsPage() {
    return (
        <div className=" font-inter text-[14px]">
            <HeroPredictions />
            <AllPredictions />
            <Blog />
            <NewsLetter />
        </div>
    );
}
