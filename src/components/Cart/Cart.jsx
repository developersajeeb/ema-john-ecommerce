import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);

    let total = 0;
    let totalShipping = 0
    let quantity = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1;

        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total * 7 / 100;

    const grandTotal = total + totalShipping + tax;

    return (
        <div className='sticky top-0 pt-8'>
            <h1 className='text-center font-semibold text-3xl'>Order Summary</h1>
            <div className='mx-10 mt-12 grid gap-6 border-2 border-gray-500 rounded-lg p-4'>
                <p className='text-xl'>Selected Items: {quantity}</p>
                <p className='text-xl'>Total Price: ${total}</p>
                <p className='text-xl'>Total Shipping Charge: ${totalShipping}</p>
                <p className='text-xl'>Tax: ${tax.toFixed(2)}</p>
                <p className='text-2xl font-semibold'>Grand Total: ${grandTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;