import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import HomePage from "./Homepage/components/landing";
function App() {
  return (
    <div className="flex bg-neutral-800">
      <Sidebar />
      <HomePage />
    </div>

  );
}

export default App;
