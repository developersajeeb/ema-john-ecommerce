import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='flex items-center justify-between bg-gray-800 px-20 py-4'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='text-white flex gap-8'>
                <a className='hover:text-orange-400' href="/shop">Shop</a>
                <a className='hover:text-orange-400' href="/order">Order</a>
                <a className='hover:text-orange-400' href="/inventory">Inventory</a>
                <a className='hover:text-orange-400' href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;