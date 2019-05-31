
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>About component</h1>
            <p>Make some changes here to see hot reloading and browser auto-refresh in action!</p>
            <br />
            <Link to="/">Back to home page</Link>
        </div>
    );
};

export default About;
