
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';

export default function Layout() {
    return (
        <div>
            <div>React isomorphic</div>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" exact component={About}></Route>
            </Switch>
        </div>
    );
}
