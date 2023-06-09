import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    
    return (
        <section className='grid md:grid-cols-2 m-20 gap-20'>
            <div>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='bg-orange-100'>
                <Cart cart={cart}></Cart>
            </div>
        </section>
    );
};

export default Order;