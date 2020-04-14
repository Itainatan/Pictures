import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./Search";
import Uploader from "./Uploader";

const main = () => {
  return (
    <Router>
      <div>
        <p> THE SITE OF PICTURES</p>
      </div>
      <div>
        <span>
          <button className='br-pill shadow-3 bg-dark-blue white pa2 ba'>
            <Link to="/">SEARCH</Link>
          </button>
        </span>
        <span>
          <button className='br-pill shadow-3 bg-dark-blue white pa2 ba'>
            <Link to="/upload">UPLOAD</Link>
          </button>
        </span>
      </div>

      <Route exact path="/" component={Search} />
      <Route exact path="/upload" component={Uploader} />
    </Router>
  );
}

export default main;