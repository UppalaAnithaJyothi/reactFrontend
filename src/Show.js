import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { Container, NavbarBrand, Navbar, Nav, NavItem } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import {BiShow} from "react-icons/bi";
import {FaUserEdit} from "react-icons/fa";
import {HiOutlineLogout} from "react-icons/hi"
// import logo from "./stl logo.jpg"



const Show = () => {

    // const { id } = useParams();

    const [data, setData] = useState([{
        employee_firstName: "",
        employee_lastName: "",
        employee_dept: "",
        employee_mobile: "",
        employee_email: "",
        employee_location: "",
        employee_user: "",
        employee_password: "",

    }])


    // Get request
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/getAllEmp")
            .then((response) => {
                console.log(response.data)
                // const details = response.data
                setData(response.data);

            })
        // .catch((err) => {
        //     console.log(err);
        // });
    }, []);



    const editData = (d) => {
        let { id, employee_firstName, employee_lastName, employee_dept, employee_mobile, employee_email, employee_location, employee_user, employee_password } = d;
        localStorage.setItem('ID', id);
        localStorage.setItem('Employee FirstName', employee_firstName);
        localStorage.setItem('Employee LastName', employee_lastName);
        localStorage.setItem('Employee Department', employee_dept);
        localStorage.setItem('Employee Mobile', employee_mobile);
        localStorage.setItem('Employee Email', employee_email);
        localStorage.setItem('Employee Location', employee_location);
        localStorage.setItem('Employee User', employee_user);
        localStorage.setItem('Employee Password', employee_password)
    }

    // const getData = (d) => {
    //     let { id, employee_firstName, employee_lastName, employee_dept, employee_mobile, employee_email, employee_location, employee_user, employee_password } = d;
    //     localStorage.setItem('ID', id);
    //     localStorage.setItem('Employee FirstName', employee_firstName);
    //     localStorage.setItem('Employee LastName', employee_lastName);
    //     localStorage.setItem('Employee Department', employee_dept);
    //     localStorage.setItem('Employee Mobile', employee_mobile);
    //     localStorage.setItem('Employee Email', employee_email);
    //     localStorage.setItem('Employee Location', employee_location);
    //     localStorage.setItem('Employee User', employee_user);
    //     localStorage.setItem('Employee Password', employee_password)
    // }




    function handleDelete(id) {

        try {
            axios.delete(`http://127.0.0.1:8000/deleteEmp/${id}`);
            setData(data.filter(d => d.id !== id));

        } catch (err) {
            console.error(err);

        }
    }



    return (
        <div>
            <br />
            <Container>
                <Navbar bg="dark" variant="dark">

                    <Container>
                    
                        <NavbarBrand>
                        
            <center><h4>STLer's Data</h4></center>
             
           
                            </NavbarBrand>
                        <Nav>
                            <NavItem>
                            {/* <center>STLer's Data</center> */}
                                {/* <Link className="btn btn-primary" to="/add">Add Employee</Link>{" "} */}
                                <Link className="btn btn-primary" to="/">Logout <HiOutlineLogout/></Link>
                            </NavItem>


                        </Nav>


                    </Container>

                </Navbar>

                <br />
                <Table bordered responsive variant="light">
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee FirstName</th>
                            <th>Employee LastName</th>
                            {/* <th>Employee Department</th> */}
                            {/* <th>Employee Mobile</th> */}
                            {/* <th>Employee Email</th> */}
                            {/* <th>Employee Password</th> */}
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {data.map(emp => {

                            return (


                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.employee_firstName}</td>
                                    <td>{emp.employee_lastName}</td>
                                    {/* <td>{emp.employee_dept}</td> */}
                                    {/* <td>{item.employee_mobile}</td> */}
                                    {/* <td>{item.employee_email}</td> */}
                                    {/* <td>{item.employee_password}</td> */}
                                    <td>

                                        <Link

                                            to={"/addEmp/" + emp.id}
                                        ><button className="btn btn-success mx-2" onClick={() => editData(emp)}>View <BiShow /></button>

                                        </Link>

                                    </td>
                                    <td>

                                        <Link

                                            to={"/update/" + emp.id}
                                        ><button className="btn btn-warning mx-2" onClick={() => editData(emp)}>Edit <FaUserEdit/></button>

                                        </Link>

                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => handleDelete(emp.id)}
                                        >
                                            Delete <MdDeleteForever />
                                        </button>
                                    </td>



                                </tr>
                            )
                        }
                        )}

                    </tbody>

                </Table>
            </Container>

        </div>

    )




}

export default Show;
