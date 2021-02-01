import React from "react";

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Example from "./Example";
import Dashboard from "./Dashboard";
import Dynamic from "./Dynamic";
import Fetch from "./Fetch";
import Login from "./Login";
import Logout from "./Logout";
import YupForm from "./YupForm";

import Cookies from "js-cookie";

function Home() {
    console.log("x", Cookies.get('login'));
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
                {/* <Route path="/dashboard" component={Dashboard} /> */}
                <Route path="/dashboard" render={() => {
                    return (!Cookies.get('login') ? <Redirect to="/login" /> : <Dashboard />)
                }}>
                </Route>
                <Route path="/dynamic" component={Dynamic} />
                <Route path="/fetch" component={Fetch} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/yup" component={YupForm} />
            </Switch>
        </BrowserRouter>
    );
}

export default Home;