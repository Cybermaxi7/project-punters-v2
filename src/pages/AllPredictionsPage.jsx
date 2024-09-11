import AllPredictions from "../components/AllPredictions";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";

export default function AllPredictionsPage() {
    return (
        <div className=" font-inter text-[14px]">
            <Hero />
            <AllPredictions />
            <Blog />
            <NewsLetter />
        </div>
    );
}
