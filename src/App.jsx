import { useState, useEffect } from "react";
import "./App.css";
import Bolita from "./componets/bolita";

function App() {
  const [following, setFollowing] = useState(true);
  const handleFollowing = () => {
    setFollowing(!following);
  };

  return (
    <div className="h-screen w-screen bg-blue-950 grid gap-y-20 place-content-center place-items-center overflow-hidden">
      <Bolita following={following} />
      <h1 className="text-rose-400 text-8xl">Mouse follwer</h1>
      <button
        onClick={handleFollowing}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 scale-125 rounded w-40 z-10 "
      >
        {following ? "Stop Following" : "Start Following"}
      </button>
    </div>
  );
}

export default App;
