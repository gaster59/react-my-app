import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';

import Sidebar from "./_partials/Sidebar";
import Navbar from "./_partials/Navbar";

function YupForm() {

    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Required')
    });

    const { register, handleSubmit, errors, reset, watch } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const submitForm = (data) => {

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

                            <div className="form-group row">
                                <div className="col-1">Name</div>
                                <div className="col-11">
                                    <input type="text" name="fullname" ref={register} className="form-control" />
                                    {errors.fullname?.message ? <div className="alert alert-danger">{errors.fullname?.message}</div> : ''}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <button type="button" className="btn btn-primary mr-2">Add</button>
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

export default YupForm;