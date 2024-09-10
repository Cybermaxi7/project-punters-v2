import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import LandingPage from "./pages/LandingPage";
import AllPredictionsPage from "./pages/AllPredictionsPage";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route
                    exact
                    path="/all-predictions"
                    element={<AllPredictionsPage />}
                />
            </Routes>
        </Router>
    );
}

export default App;
