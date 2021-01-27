import React, { useState, useEffect } from "react";

import Sidebar from "./_partials/Sidebar";
import Navbar from "./_partials/Navbar";

function Fetch() {

    const url = 'https://jsonplaceholder.typicode.com/todos/';
    const [totos, setTodos] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        document.title = "Fetch";

        let header = {};
        fetch(url, header)
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                setIsLoaded(true);
                setTodos(result);
            })
            .catch(errors => {
                setIsLoaded(false);
                console.log(errors);
            })
    })

    return (
        <div className="d-flex w-100">
            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <div className="container-fluid">
                        <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">UserId</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Title</th>
                                </tr>
                            </thead>
                            <tbody>

                                {!isLoaded ? <tr><td colSpan="3">Loading</td></tr> : totos.map((item, index) => <tr key={index}>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                </tr>)
                                }




                                {/* {totos.map((item, index) => <tr key={index}>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                </tr>)} */}


                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="3">
                                        {totos.length}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Fetch;