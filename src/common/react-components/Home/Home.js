
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home component</h1>
            <p>Navigate: </p>
            <a href="/about">About via server render</a>
            <br />
            <Link to="/about">About via react router link</Link>
        </div>
    );
};

export default Home;
