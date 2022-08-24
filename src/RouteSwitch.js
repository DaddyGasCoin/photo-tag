
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Leaderboard from "./LeaderBoard";

const RouteSwitch = () => {
  return (
    <BrowserRouter basename="/photo-tag">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/LeaderBoards" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;