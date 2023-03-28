import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // Step 1: get id of the addedProduct
        for(const id in storedCart){
            // Step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id);

            if(addedProduct){
                // Step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                // Step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        // Step 5: set the cart
        setCart(savedCart);
    }, [products])

    const handleAddToCard = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    // console.log(cart);
    return (
        <main>
            <section className='grid md:grid-cols-4'>
                <div className='my-20 col-span-3 mx-20 grid md:grid-cols-3 gap-6'>
                    {
                        products.map(product => <Product
                            product={product}
                            handleAddToCard={handleAddToCard}
                            key={product.id}
                            ></Product>)
                    }
                </div>
                <div className='bg-orange-100'>
                    <Cart cart={cart}></Cart>
                </div>
            </section>
        </main>
    );
};

export default Shop;