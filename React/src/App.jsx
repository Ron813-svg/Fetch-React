import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } 
from "react-router";

import Home from "./pages/Home";
import Nav from "../src/components/Nav";
import DragonBall from "./pages/DragonBall";
import Morty from "./pages/morty";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dragon" element={<DragonBall />} />
          <Route path="/morty" element={<Morty />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
