import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="bg-[#fff]">
        <div className="Container flex items-center justify-between py-10 px-10 " >
          <Link to="/">
            <h1 className="font-bold text-3xl px-32">Workout Buddy</h1>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
