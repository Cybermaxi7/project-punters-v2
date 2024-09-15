import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import LandingPage from "./pages/LandingPage";
import AllPredictionsPage from "./pages/AllPredictionsPage";

import GamePage from "./pages/GamePage";
import { HelmetProvider } from "react-helmet-async";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <HelmetProvider>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route
                        exact
                        path="/all-predictions"
                        element={<AllPredictionsPage />}
                    />
                    {/* Game-related routes */}
                    <Route path="/game/*" element={<GamePage />} />
                    {/* Not Found route */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

export default App;
