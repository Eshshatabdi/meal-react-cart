import React from 'react';

const Cart = ({ cart }) => {


    const { strMeal } = cart


    return (
        <div>
            <li>{strMeal}</li>





        </div>
    );
};

export default Cart;