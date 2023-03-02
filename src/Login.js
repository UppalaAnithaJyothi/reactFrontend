import React, { useState , useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {HiOutlineLogin} from "react-icons/hi"



const Login = () => {
    let navigate = useNavigate();
   const [employee_user , setEmployeeUser] = useState("")
   const [employee_password , setEmployeePassword] = useState("")
   const [data, setData] = useState([])
//    const [data1, setData1] = useState([])


  
   

   const onSubmitHandler = e => {
    e.preventDefault();
    try{
        axios.get("http://127.0.0.1:8000/login/"+employee_user+"/"+employee_password).then(response => {
            // user = response.user
            console.log(response.data)
            setData(response.data)
            if (response.data){
                
                alert("Login Successful")
                navigate("/show")
            }
            else{
                alert("Invalid Login")
            }
        })
    }
    catch (err) {
        alert("Invalid")
    }
   }
        


    
    return(
      
        <section class="vh-100 gradient-custom">
          

          
      <div class="container py-5 ">
        <div class="row d-flex justify-content-center align-items-center  ">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5 ">
            <div class="card bg-info text-white " >
              <div class="card-body p-5 text-center ">
    
                <div class="mb-md-5 mt-md-4 pb-5">
                    <form >
                    <h2 class="fw-bold mb-2 ">STLer LOGIN</h2>
                  <p class="text-black-50 mb-5">Please Login With your Details</p>
    
                  <div class="form-outline form-white mb-4">
                  <label class="form-label" >Employee User</label>
                    <input type="text"  class="form-control form-control-lg" placeholder="Enter your username" name="employee_user" value={employee_user} onChange={(e) => setEmployeeUser(e.target.value)}/>
                    
                  </div>
                  
                  
                 
                  
    
                  <div class="form-outline form-white mb-4">
                  <label class="form-label" for="typePasswordX">Employee Password</label>
                    <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Enter your password" name="employee_password" value={employee_password} onChange={(e) => setEmployeePassword(e.target.value)}/>
                    
                  </div>
    
    <Link to="/show">
    <button class="btn btn-light px-5" type="submit" onClick={onSubmitHandler}>Login <HiOutlineLogin/></button><br/>
    
    </Link>
    {/* <p>Don't have account?</p> */}<br/>
    {" "}<p>Don't have account? <a href="/add" class="link-dark"><b>SignUp</b></a>
</p>{" "}
    {/* <Link className="btn btn-outline-light px-5" to="/add">Sign Up</Link> */}
                  
                  

                 
                  
                  
                  
                
    
        
    
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

export default Login;