import React from 'react';
import { GiCancel } from "react-icons/gi";
import { BiMenu } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = ({sideMenu, showNav}) => {
	
	return(

<div>
<div className="menu-toggle" onClick={showNav}><BiMenu /></div>
<div className={sideMenu ? "side-menu side-menu--visible":"side-menu"}>
<div className={sideMenu ? "side-menu side-menu--hidden":"side-menu"}><GiCancel /></div>
<ul>
	<li><Link to="/">Home</Link></li>
	<li><Link to="whatwedo">WhatWeDo</Link></li>
	<li><Link to="about">AboutUs</Link></li>
	<li><Link to="ourcompany">OurCompany</Link></li>
	<li><Link to="faq">Faq</Link></li>
	<li><Link to="footer">Footer</Link></li>
	</ul>
	</div>
</div>

);
	};


export default Nav;