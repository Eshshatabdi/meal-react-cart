import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Navbar/Product/Product';

const Card = () => {
    const [cards, setCards] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setCards(data.meals))

    }, [])

    const handleToCart = (card) => {
        const newCart = [...carts, card]
        setCarts(newCart)
    }




    return (
        <div className='d-flex'>

            <div className="row container">
                {
                    cards.map(card => <Product key={card.id}
                        card={card}
                        handleToCart={handleToCart}
                    ></Product>)
                }
            </div>
            <div className='bg-info'>
                <h1>Order the item</h1>


                {
                    carts.map(cart => <Cart key={cart.idMeal}

                        cart={cart}></Cart>)
                }


            </div>

        </div >
    );
};

export default Card;