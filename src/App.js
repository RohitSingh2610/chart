import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Graph from "./components/Graph";
import Chart from "./components/Chart";

export default function App() {
  return (
    <>
      <Graph />
      <Navbar />
      <Chart />
    </>
  );
}
