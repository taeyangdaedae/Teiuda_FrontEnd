import React from "react";
import "./App.css";
import Router from "@/routes";
import { Nav } from "@/components";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router />
    </div>
  );
}

export default App;
