import React from "react";

function Button(props) {

    // const setNumber = (number) => {
    //     props.getNumber(number);
    // }

    return(
        <div className="col-4">
            <button className="w-100 justify-content-center d-flex" onClick={() => props.getNumber(props.number)} >{props.number}</button>
            {/* <button className="w-100 justify-content-center d-flex" onClick={setNumber(props.number)} >{props.number}</button> */}
        </div>
    );
}

export default Button;