import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Footer = () => {
  var year = new Date();
  return (
    <footer>
      <p>Footer</p>
      {/* new Date();
  var n = d.getFullYear(); */}
      <p>{`Copyright ${year.getFullYear()}`}</p>
      <div className="footer-sub-containers">
        <p>LOGO</p>
      </div>
      <div className="footer-sub-containers">
        <h4>connect/follow</h4>
        <ul>
          <li><a className="footer-links" href={"#"}>twitter</a></li>
          <li><a className="footer-links" href={"#"}>github</a></li>
          <li><a className="footer-links" href={"#"}>linked-in</a></li>
        </ul>
      </div>
      <div className="footer-sub-containers"><h4>contact</h4>
           instagram
        contact me at email@gmail.com
     </div>
    </footer>
  )
}

export default Footer;