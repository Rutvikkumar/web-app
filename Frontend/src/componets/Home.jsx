import React, { useState } from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row items-center justify-center min-h-screen bg-gray-100">
        <div className="space-x-6">
          <a href="/add">
            {" "}
            <button className="px-10 py-5 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700">
              Show Form
            </button>
          </a>

          <a href="/show">
            {" "}
            <button className="px-10 py-5 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700">
              All Data
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
