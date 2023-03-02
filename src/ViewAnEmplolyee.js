import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import {HiBackspace} from "react-icons/hi"


const ViewAnEmployee = () => {

    // let navigate = useNavigate();


    const [id, setID] = useState(0);
    const [employee_firstName, setEmployeeFirstName] = useState('');
    const [employee_lastName, setEmployeeLastName] = useState('');
    const [employee_dept, setEmployeeDept] = useState('');
    const [employee_mobile, setEmployeeMobile] = useState('');
    const [employee_email, setEmployeeEmail] = useState('');
    const [employee_location, setEmployeeLocation] = useState('');
    const [employee_user , setEmployeeUser] = useState('');
    const [employee_password , setEmployeePassword] = useState('');

//local storage is used for storing the data in the chrome

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


    
    return (
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-info text-white" >
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-5 mt-md-4 pb-5">
                                    <form>
                                        <h2 class="fw-bold mb-2 text-uppercase">{employee_firstName} {employee_lastName}</h2>
                                        <p class="text-white-50 mb-5">View your details</p>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typeEmailX">Employee FistName</label>
                                            <input type="text" id="typeEmailX" class="form-control form-control-lg" name="employee_firstName" value={employee_firstName}/>

                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typeEmailX">Employee LastName</label>
                                            <input type="text" id="typeEmailX" class="form-control form-control-lg" name="employee_lastName" value={employee_lastName}/>

                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typePasswordX">Employee Department</label>
                                            <input type="text" id="typePasswordX" class="form-control form-control-lg" name="employee_dept" value={employee_dept}  />

                                        </div>
                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typePasswordX">Employee Mobile</label>
                                            <input type="number" id="typePasswordX" class="form-control form-control-lg" name="employee_mobile" value={employee_mobile} />

                                        </div>
                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typePasswordX">Employee Email</label>
                                            <input type="email" id="typePasswordX" class="form-control form-control-lg" name="employee_email" value={employee_email} />

                                        </div>

                                        <div class="form-outline form-white mb-4">
                  <label class="form-label" for="typePasswordX">Employee Location</label>
                    <input type="text" id="typePasswordX" class="form-control form-control-lg" name="employee_location" value={employee_location}/>
                    
                  </div>

                  <div class="form-outline form-white mb-4">
                  <label class="form-label" for="typePasswordX">Employee User</label>
                    <input type="text" id="typePasswordX" class="form-control form-control-lg" name="employee_user" value={employee_user}/>
                    
                  </div>

                  <div class="form-outline form-white mb-4">
                  <label class="form-label" for="typePasswordX">Employee Password</label>
                    <input type="password" id="typePasswordX" class="form-control form-control-lg" name="employee_password" value={employee_password}/>
                    
                  </div>


                                     <Link to="/show">
                                     <button class="btn btn-outline-light btn-lg px-5" type="submit">Back <HiBackspace/></button>

                                     </Link>

                                        








                                    </form>

                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ViewAnEmployee;