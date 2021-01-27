import React from "react";

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Example from "./Example";
import Dashboard from "./Dashboard";
import Dynamic from "./Dynamic";
import Fetch from "./Fetch";

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
                <Route path="/fetch" component={Fetch} />
            </Switch>
        </BrowserRouter>
    );
}

export default Home;