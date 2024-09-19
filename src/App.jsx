import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import LandingPage from "./pages/LandingPage";
import AllPredictionsPage from "./pages/AllPredictionsPage";
import GamePage from "./pages/GamePage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./shared/Header";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    AOS.init();
    return (
        <HelmetProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route
                        path="/all-predictions"
                        element={<AllPredictionsPage />}
                    />
                    <Route path="/game/*" element={<GamePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

export default App;
