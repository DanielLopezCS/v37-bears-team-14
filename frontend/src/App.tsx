import React from "react";
import Hello from "./Hello";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="border-2 border-stone-500 p-8 m-12 rounded-md">
          <Hello />
        </div>
      </div>
    </>
  );
}

export default App;
