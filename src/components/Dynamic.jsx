import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form"

import Sidebar from "./_partials/Sidebar";
import Navbar from "./_partials/Navbar";

function Dynamic() {

    const [inputList, setInputList] = useState([{ firstName: '' }]);

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        document.title = "Dynamic form";

    }, [inputList]);

    const handleInputChange = (e, index) => {
        let tempInputList = [...inputList];
        tempInputList[index].firstName = e.target.value;
        setInputList(tempInputList);
    }

    const addMore = () => {
        let tempInputList = [...inputList];
        tempInputList.push({ firstName: '2' });
        setInputList(tempInputList);
        reset(inputList);
    }

    const removeOne = (index) => {
        let tempInputList = [...inputList];
        tempInputList.splice(index, 1);
        setInputList(tempInputList);
    }

    return (
        <div className="d-flex w-100">
            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <div className="container-fluid">
                        <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

                        <form onSubmit={handleSubmit()}>
                            {inputList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputAge" className="col-1">Age</label>
                                            <div className="col-8">
                                                <input type="text" className="form-control" defaultValue={item.firstName} name="ageInput"
                                                    ref={register({ required: true, pattern: /[\d]/i })} onChange={(event) => handleInputChange(event, index)} />
                                            </div>

                                            <div className="col-3">
                                                <button type="button" className="btn btn-primary" onClick={() => removeOne(index)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </form>
                        <div className="row">
                            <div className="col">
                                <button type="button" className="btn btn-primary" onClick={addMore}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dynamic;