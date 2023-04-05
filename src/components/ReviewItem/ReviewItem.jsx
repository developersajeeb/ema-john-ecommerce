import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const {id, img, name, price, shipping } = product;

    return (
        <div className='grid grid-cols-3 border border-gray-300 p-3 rounded-lg mb-5'>
            <div className='flex gap-5 col-span-2'>
                <img className='rounded-lg w-24' src={img} alt="" />
                <div>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <p className='my-2'>Price: <span className='text-orange-500'>${price}</span></p>
                    <p>Shipping Charge: <span className='text-orange-500'>${shipping}</span></p>
                </div>
            </div>
            <div className='grid items-center justify-items-end'>
                <FontAwesomeIcon onClick={() => handleRemoveFromCart(id)} className='bg-red-200 text-red-500 rounded-full p-4 text-xl cursor-pointer' icon={faTrashCan} />
            </div>
        </div>
    );
};

export default ReviewItem;