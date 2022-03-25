import React from 'react';

const Product = ({ card, handleToCart }) => {
    const { strMeal, strMealThumb } = card;
    return (


        <div className="col-md-4 gy-5">
            <div className="card">

                <img src={strMealThumb} alt="" />

                <h2>name:{strMeal}</h2>
                <button onClick={() => { handleToCart(card) }} className='bg-danger'>Add to Cart</button>

            </div>


        </div>






    );
};

export default Product;