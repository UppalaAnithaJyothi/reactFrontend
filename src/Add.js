import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { MdCancel } from 'react-icons/md';
import {SiGnuprivacyguard} from "react-icons/si"

const Add = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    employee_firstName: "",
    employee_lastName: "",
    employee_dept: "",
    employee_mobile: "",
    employee_email: "",
    employee_location: "",
    employee_user: "",
    employee_password: ""
  })
  const onChangeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const { employee_firstName, employee_lastName, employee_dept, employee_mobile, employee_email, employee_location, employee_user, employee_password } = data

  
  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(data)
    
      // post request
      try {
        axios.post("http://127.0.0.1:8000/postEmp", {
          employee_firstName: employee_firstName,
          employee_lastName: employee_lastName,
          employee_dept: employee_dept,
          employee_mobile: employee_mobile,
          employee_email: employee_email,
          employee_location: employee_location,
          employee_user: employee_user,
          employee_password: employee_password
        }).then(res => {
          console.log(res)
        })
        
        navigate("/")



      }
      catch (error) {
        alert("User failed")
      }

 
    
  }
  
  


  return (
    <section class="vh-100 gradient-custom">
      <div class="container py-5 ">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-info text-white" >
              <div class="card-body p-5 text-center">

                <div class="mb-md-5 mt-md-4 pb-5">
                  <form onSubmit={onSubmitHandler}>
                    <h2 class="fw-bold mb-2 text-uppercase">STLer Sign Up Form</h2>
                    <p class="text-black-50 mb-5">Please Add your details</p>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">Employee FirstName</label>
                      <input type="text" id="typeEmailX" placeholder="Enter your FirstName" class="form-control form-control-lg" name="employee_firstName" value={employee_firstName} onChange={onChangeHandler} required/>

                    </div>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">Employee LastName</label>
                      <input type="text" id="typeEmailX" placeholder="Enter your LastName" class="form-control form-control-lg" name="employee_lastName" value={employee_lastName} onChange={onChangeHandler} required/>

                    </div>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typePasswordX">Employee Department</label>
                      <input type="text" id="typePasswordX" placeholder="Enter your Department" class="form-control form-control-lg" name="employee_dept" value={employee_dept} onChange={onChangeHandler} required/>

                    </div>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typePasswordX">Employee Mobile</label>
                      <input type="number" id="typePasswordX" placeholder="Enter your Mobile" class="form-control form-control-lg" name="employee_mobile" value={employee_mobile} onChange={onChangeHandler} required/>

                    </div>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typePasswordX">Employee Email</label>
                      <input type="email" id="typePasswordX"  placeholder="Enter your Email"class="form-control form-control-lg" name="employee_email" value={employee_email} onChange={onChangeHandler} required/>

                    </div>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typePasswordX">Employee Location</label>
                      <input type="text" id="typePasswordX" placeholder="Enter your Location" class="form-control form-control-lg" name="employee_location" value={employee_location} onChange={onChangeHandler} required/>

                    </div>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typePasswordX">Employee User</label>
                      <input type="text" id="typePasswordX" placeholder="Enter your UserId" class="form-control form-control-lg" name="employee_user" value={employee_user} onChange={onChangeHandler} required/>

                    </div>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typePasswordX">Employee Password</label>
                      <input type="password" id="typePasswordX" placeholder="Enter your Password" class="form-control form-control-lg" name="employee_password" value={employee_password} onChange={onChangeHandler} required/>

                    </div>

                    {/* <Link to="/"> */}

                    {/* </Link> */}

                    <button class="btn btn-light px-5" type="submit">SignUp <SiGnuprivacyguard/></button>
                    {" "}
                    <Link class="btn btn-danger px-5" to="/">
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

export default Add;