import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {MdEditLocation} from "react-icons/md";
import {MdCancel} from "react-icons/md"



const Update = () => {

    let navigate = useNavigate();


    const [id, setID] = useState(0);
    const [employee_firstName, setEmployeeFirstName] = useState('');
    const [employee_lastName, setEmployeeLastName] = useState('');
    const [employee_dept, setEmployeeDept] = useState('');
    const [employee_mobile, setEmployeeMobile] = useState('');
    const [employee_email, setEmployeeEmail] = useState('');
    const [employee_location, setEmployeeLocation] = useState('');
    const [employee_user, setEmployeeUser] = useState('');
    const [employee_password, setEmployeePassword] = useState('');


    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setEmployeeFirstName(localStorage.getItem('Employee FirstName'));
        setEmployeeLastName(localStorage.getItem('Employee LastName'));
        setEmployeeDept(localStorage.getItem('Employee Department'));
        setEmployeeMobile(localStorage.getItem('Employee Mobile'));
        setEmployeeEmail(localStorage.getItem('Employee Email'));
        setEmployeeLocation(localStorage.getItem('Employee Location'));
        setEmployeeUser(localStorage.getItem('Employee User'));
        setEmployeePassword(localStorage.getItem('Employee Password'));

    }, []);


    const updateform = () => {
        axios.put(`http://127.0.0.1:8000/editEmp/${id}`, {
            employee_firstName,
            employee_lastName,
            employee_dept,
            employee_mobile,
            employee_email,
            employee_location,
            employee_user,
            employee_password
        }).then(() => {
            console.log("Updated")
        })
        navigate("/show")
    }


    return (
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-70">
                <div class="row d-flex justify-content-center align-items-center h-20">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-info text-white" >
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-5 mt-md-4 pb-5">
                                    <form onSubmit={updateform}>
                                        <h2 class="fw-bold mb-2 text-uppercase">Edit Employee Form</h2>
                                        <p class="text-white-50 mb-5">Edit your details</p>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typeEmailX">Employee FirstName</label>
                                            <input type="text" id="typeEmailX" class="form-control form-control-lg" name="employee_firstName" value={employee_firstName} onChange={(e) => setEmployeeFirstName(e.target.value)} />

                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typeEmailX">Employee LastName</label>
                                            <input type="text" id="typeEmailX" class="form-control form-control-lg" name="employee_lasttName" value={employee_lastName} onChange={(e) => setEmployeeLastName(e.target.value)} />

                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typePasswordX">Employee Department</label>
                                            <input type="text" id="typePasswordX" class="form-control form-control-lg" name="employee_dept" value={employee_dept} onChange={(e) => setEmployeeDept(e.target.value)} />

                                        </div>
                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typePasswordX">Employee Mobile</label>
                                            <input type="number" id="typePasswordX" class="form-control form-control-lg" name="employee_mobile" value={employee_mobile} onChange={(e) => setEmployeeMobile(e.target.value)} />

                                        </div>
                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typePasswordX">Employee Email</label>
                                            <input type="email" id="typePasswordX" class="form-control form-control-lg" name="employee_email" value={employee_email} onChange={(e) => setEmployeeEmail(e.target.value)} />

                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" >Employee Location</label>
                                            <input type="text"  class="form-control form-control-lg" name="employee_location" value={employee_location} onChange={(e) => setEmployeeLocation(e.target.value)} />

                                        </div>
                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" >Employee User</label>
                                            <input type="text"  class="form-control form-control-lg" name="employee_user" value={employee_user} onChange={(e) => setEmployeeUser(e.target.value)} />

                                        </div>
                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" >Employee Password</label>
                                            <input type="password"  class="form-control form-control-lg" name="employee_password" value={employee_password} onChange={(e) => setEmployeePassword(e.target.value)} />

                                        </div>



                                        <button class="btn btn-light btn-lg px-4" type="submit">Update <MdEditLocation/></button>{" "}{" "}



                                        <Link class="btn btn-danger btn-lg px-4" to="/show">
                                            Cancel <MdCancel/>
                                        </Link>




                                    </form>

                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Update;

