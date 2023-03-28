import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const { id, img, name, price, seller, ratings } = props.product;
    const handleAddToCard = props.handleAddToCard;


    return (
        <div className="relative border-2 border-gray-400 rounded-lg bg-white">
            <figure className="px-2 pt-2">
                <img src={img} alt="Product Images" className="rounded-lg" />
            </figure>
            <div className='p-3'>
                <div>
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <h3 className='text-lg mt-2'>Price: ${price}</h3>
                </div>
                <div className='mt-5 mb-12'>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} stare</p>
                </div>
            </div>
            <div onClick={() => handleAddToCard(props.product)} className='absolute bottom-0 p-3 bg-orange-100 w-full text-center rounded-b-lg border-t-2 border-gray-400 cursor-pointer'>
                <button>
                    Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart}  className='ml-3'/>
                </button>
            </div>
        </div>
    );
};

export default Product;