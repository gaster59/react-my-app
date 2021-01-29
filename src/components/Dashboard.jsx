import React, { useEffect } from "react"
import { useForm } from "react-hook-form"

import Sidebar from "./_partials/Sidebar";
import Navbar from "./_partials/Navbar";

function Dashboard() {

    useEffect(() => {
        // event render
    
    
        // event enmount
        // return () => console.log('unmount');
    
      },);

    const { register, handleSubmit, errors } = useForm();
    const onSubmitForm = data => {
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
                        <form onSubmit={handleSubmit(onSubmitForm)}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="text" className="form-control" name="emailInput" ref={register({ required: true, minLength: 3 })} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                {errors.emailInput && errors.emailInput.type === 'required' && <div className="alert alert-danger">Required</div>}
                                {errors.emailInput && errors.emailInput.type === 'minLength' && <div className="alert alert-danger">Required 111</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputAge">Age</label>
                                <input type="text" className="form-control" name="ageInput" ref={register({ required: true, pattern: /[\d]/i })} />
                                {errors.ageInput && errors.ageInput.type === 'required' && <div className="alert alert-danger">Required</div>}
                                {errors.ageInput && errors.ageInput.type === 'pattern' && <div className="alert alert-danger">Only input number</div>}
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Dashboard