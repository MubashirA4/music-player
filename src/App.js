import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import HomePage from "./Homepage";
import TrendingCard from "./Props/trending card";
import MusicPlayerPage from "./player";
import Discover from "./discoverpage";
import SignInPage from "./signin";
import SignUpPage from "./signup & signin/signup";

function App() {
  return (
    <div className=" flex h-screen bg-neutral-800 text-white font-vazirmatn">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-6">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/trend" element={<TrendingCard/>}/>
        <Route path="play" element={<MusicPlayerPage/>} />
        <Route path="discover" element={<Discover/>} />
        <Route path="signin" element={<SignInPage/>} />
        <Route path="signup" element={<SignUpPage/>} />
      </Routes>
      </div>
      {/* <HomePage /> */}
    </div>

  );
}

export default App;
