import React from "react";

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Example from "./Example";
import Dashboard from "./Dashboard";
import Dynamic from "./Dynamic";

function Home() {
    return (
        <BrowserRouter>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Example</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav> */}
            <Switch>
                <Route exact path="/" component={Example} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/dynamic" component={Dynamic} />
            </Switch>
        </BrowserRouter>
    );
}

export default Home;