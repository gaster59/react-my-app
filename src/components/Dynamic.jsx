import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import Sidebar from "./_partials/Sidebar";
import Navbar from "./_partials/Navbar";

function Dynamic() {

    const [inputList, setInputList] = useState([{ firstName: '' }]);

    const { register, handleSubmit, errors, reset } = useForm({
        mode: 'onBlur'
    });

    useEffect(() => {
        document.title = "Dynamic form";

    }, [inputList]);

    const handleInputChange = (e, index) => {
        let tempInputList = [...inputList];
        tempInputList[index].firstName = e.target.value;
        setInputList(tempInputList);
        reset(inputList);
    }

    const addMore = () => {
        let tempInputList = [...inputList];
        tempInputList.push({ firstName: '' });
        setInputList(tempInputList);
    }

    const removeOne = (index) => {
        let tempInputList = [...inputList];
        tempInputList.splice(index, 1);
        setInputList(tempInputList);
        reset(inputList);
    }

    const submitForm = data => {
        // reset(inputList);
        console.log(data);
    }

    return (
        <div className="d-flex w-100">
            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <div className="container-fluid">
                        <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

                        <form onSubmit={handleSubmit(submitForm)}>
                            {inputList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputAge" className="col-1">Age</label>
                                            <div className="col-8">
                                                <input type="text" className="form-control" defaultValue={item.firstName} name={`ageInput[${index}]`}
                                                    ref={register({ required: true, pattern: /^[0-9]*$/i })} onChange={(event) => handleInputChange(event, index)} />
                                                {typeof errors.ageInput !== 'undefined' ? (errors.ageInput[index] && errors.ageInput[index].type === 'required' && <div className="alert alert-danger">Required</div>) : null}
                                                {typeof errors.ageInput !== 'undefined' ? (errors.ageInput[index] && errors.ageInput[index].type === 'pattern' && <div className="alert alert-danger">Only input number</div>) : null}
                                            </div>

                                            <div className="col-3">
                                                <button type="button" className="btn btn-primary" onClick={() => removeOne(index)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="row">
                                <div className="col">
                                    <button type="button" className="btn btn-primary mr-2" onClick={addMore}>Add</button>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dynamic;