import React, { useEffect } from "react";
import Cookies from "js-cookie";

function Logout(props) {

    useEffect(() => {
        Cookies.remove('login');
        props.history.push('/login');
    });

    return(
        <div>Logout</div>
    );

}

export default Logout;