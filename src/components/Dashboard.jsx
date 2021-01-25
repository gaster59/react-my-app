import React from "react"

import Sidebar from "./_partials/Sidebar";
import Navbar from "./_partials/Navbar";

import {
    Link
} from "react-router-dom";

function Dashboard() {
    return (
        <div className="d-flex w-100">
            
            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <div class="container-fluid">
                        <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Dashboard