import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomPage from "./pages/WelcomPage";
import LoginPage from "./pages/LoginPage";
import VersesPage from "./pages/VersesPage";
import HomePage from "./pages/HomePage";
import ScoreBoard from "./pages/ScoreBoard";
import ChallengePage from "./pages/ChallengePage";
import VersePage from "./pages/VersePage";
import ChallengeInput from "./components/ChallengeInput";
import ChallengeSolved from "./components/ChallengeSolved";
import PrivateRoute from "./context/PrivateRoute";
import PublicRoute from "./context/PublicRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomPage />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/verses" element={<VersesPage />} />
          <Route path="/scoreboard" element={<ScoreBoard />} />
          <Route
            path="/challenge/:id"
            element={<ChallengePage status={<ChallengeInput />} />}
          />
          <Route
            path="/challenge!solved"
            element={<ChallengePage status={<ChallengeSolved />} />}
          />
          <Route path="/verses/:id" element={<VersePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;