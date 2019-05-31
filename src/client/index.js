
import React from "react";
import ReactDOM from "react-dom";
import Server from 'react-dom/server';
import { BrowserRouter } from "react-router-dom";
import Layout from "../common/react-components/Layout";


ReactDOM.hydrate(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>,
    document.getElementById("root")
);
