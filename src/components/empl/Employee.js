




import React, { useEffect, useState } from 'react';

import Data from '../../components/Data/Data.json';

import EmployeeDetails from '../Employee_Details/EmployeeDetails';
import '../empl/Employee.css';
import Cart from '../../components/cart/Cart';






const Employee = () => {

   
const [count , setCount]=useState([]) ;

const [cart, setCart]= useState([])

useEffect(()=>{


    setCount(Data)   

},[])

function handleEmployee(pd){

console.log('Employee_Add', pd);


const newCart = [...cart , pd];


setCart(newCart)
}


    return (

        <div className='employee-container'>

        <div className='container'>
        
        {

            count.map(pd => <EmployeeDetails               

                handleEmployee = { handleEmployee}
                pd ={pd}                 
                
                ></EmployeeDetails>)
        }
        </div>

        <div className='cart-container'>

        
        <Cart cart ={cart}></Cart>

        </div>
            
        </div>
    );
};

export default Employee;