import React from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Show from "./Show";
import Add from "./Add";
import Update from "./Update";
import ViewAnEmployee from "./ViewAnEmplolyee";
import Login from "./Login";
// import SignUp from "./SignUp";

const App = () => {

  // function SubmitButton() {
  //   if (employee_name && employee_dept && employee_mobile && employee_email && employee_password) {
  //     return <button type="button" onClick={onSubmitHandler}>Submit</button>
  //   } else {
  //     return <button type="button" disabled>Submit</button>
  //   };
  // };

  
  
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/show" element={<Show />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/add" element={<Add />} />
          <Route path="/addEmp/:id" element={<ViewAnEmployee />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>


    </div>

  )

}

export default App;