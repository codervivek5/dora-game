import React from "react";
import { Link } from "react-router-dom";
import "./style/WelcomePage/color.css";
import "./style/WelcomePage/first.css";


const WelcomePage = () => {
  return (
    <div>
      <section>
      <div className="container">
        <Link to="/Registration">
          <button>Get Started</button>
        </Link>
      </div>
    </section>
    </div>
  );
};

export default WelcomePage;
