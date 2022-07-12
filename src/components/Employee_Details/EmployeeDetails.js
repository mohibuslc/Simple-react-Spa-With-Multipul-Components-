import React from "react";
import "../Employee_Details/Employee.css";

const EmployeeDetails = (props) => {
  const { name, id, img, salary } = props.pd;





  return (
    <div style={{margin: '20px'}}>
     
      <div style={{border:'1px solid green' , padding: ' 10px'}} >

        <h1> Employee Details :{name} </h1>
        <p>ID : {id}</p>
        <p>Salary: {salary}</p>
        
        <img style ={{height:'76px'}}src={img} alt="Employee Img" />

        <button style={{marginLeft:'700px'}} 
        onClick={()=>props.handleEmployee(props.pd)}>
          
          Add_Employee</button>


      </div>
      <br>
      </br>

      <div>

     
      </div>

    </div>
  );
};

export default EmployeeDetails;
