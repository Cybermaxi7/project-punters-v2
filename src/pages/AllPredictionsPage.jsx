import AllPredictions from "../components/AllPredictions";
import HeroPredictions from "../components/HeroPredictions";
import Blog from "../components/Blog.jsx";
import Newsletter from "../components/NewsLetter.jsx";
import { Helmet } from "react-helmet-async";

export default function AllPredictionsPage() {
    return (
        <div className=" font-inter text-[14px]">
            <Helmet>
                <title>All Predictions - Naija Punters</title>
            </Helmet>
            <HeroPredictions />
            <AllPredictions />
            <Blog />
            <Newsletter />
        </div>
    );
}
