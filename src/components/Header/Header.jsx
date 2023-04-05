import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex items-center justify-between bg-gray-800 px-20 py-4'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='text-white flex gap-8'>
                <Link className='hover:text-orange-400' to="/shop">Shop</Link>
                <Link className='hover:text-orange-400' to="/order">Order</Link>
                <Link className='hover:text-orange-400' to="/inventory">Inventory</Link>
                <Link className='hover:text-orange-400' to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;