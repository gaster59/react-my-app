import React from "react";

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Example from "./Example";
import Dashboard from "./Dashboard";

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
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}

export default Home;