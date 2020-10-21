import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Nav = () => {
  return (
    <nav>
      <h1 className='nav-name'>Animation Gallery</h1>
      <ul className='nav-link-wrapper'>
        <Link to='/'>
          <li className='nav-link'>Home</li>
        </Link>
        <Link to='/cats'>
          <li className='nav-link'>Cats</li>
        </Link>
        <Link to='/blog'>
          <li className='nav-link'>Blog</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;