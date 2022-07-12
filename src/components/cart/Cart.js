import React from 'react';

const cart = (props) => {

const cart = props.cart

let Total = 0 ;

for(let i = 0 ; i<cart.length ; i++){

    const Employee = cart[i];

    const price  = parseInt(Employee.salary );

    Total += price



};

    return (


        <div>
            <p> Card Summery: {cart.length}</p>
            <p>Employe_Salary :{Total}</p>
        </div>
    );
};

export default cart;