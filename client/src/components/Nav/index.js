import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Nav = () => {
  return (
    <nav>
      <h1>Animation Gallery</h1>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/cats'><li>Cats</li></Link>
        <Link to='/blog'><li>Blog</li></Link>

      </ul>
    </nav>
  )
}

export default Nav;