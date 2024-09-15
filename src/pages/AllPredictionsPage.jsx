import AllPredictions from "../components/AllPredictions";
import HeroPredictions from "../components/HeroPredictions";
import Blog from "../components/Blog.jsx";
import Newsletter from "../components/NewsLetter.jsx";

export default function AllPredictionsPage() {
  return (
    <div className=" font-inter text-[14px]">
      <HeroPredictions />
      <AllPredictions />
      <Blog />
      <Newsletter />
    </div>
  );
}
