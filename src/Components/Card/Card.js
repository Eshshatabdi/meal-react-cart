import React, { useEffect, useState } from 'react';
import Product from '../Navbar/Product/Product';

const Card = () => {
    const [cards, setCards] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setCards(data.meals))

    }, [])




    return (
        <div className='d-flex'>

            <div className="row container">
                {
                    cards.map(card => <Product card={card} ></Product>)
                }
            </div>
            <div className='bg-info'>
                <h2>Order Sumery</h2>

            </div>

        </div >
    );
};

export default Card;