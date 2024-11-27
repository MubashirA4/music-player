import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import HomePage from "./Homepage";
import TrendingCard from "./Props/trending card";
import MusicPlayerPage from "./player";

function App() {
  return (
    <div className=" flex bg-neutral-800 text-white font-vazirmatn">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/trend" element={<TrendingCard/>}/>
        <Route path="play" element={<MusicPlayerPage/>} />
      </Routes>
      {/* <HomePage /> */}
    </div>

  );
}

export default App;
