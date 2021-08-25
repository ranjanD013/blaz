import { useState } from "react";
import clsx from 'clsx'
import { NavLink } from "react-router-dom";

const Header = () => {
  // set a variable 'responsive' to false. Update it using 'setResponsive'
  const [responsive, setResponsive] = useState(false);

  const toggleResponsive = () => {
    //take current value of responsive and flip it
    setResponsive(prev => !prev);
  }

  return (
    <div className="top">
      <div className="logo"><a href="#"> Blaz</a></div>
      <div className={clsx('topnav', { 'responsive': responsive })}>
        <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/news" activeClassName="active">News</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>

        <a className='icon' onClick={toggleResponsive}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;