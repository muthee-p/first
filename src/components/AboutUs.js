import React from 'react';
import { BiRightArrow } from "react-icons/bi";

const AboutUs = () =>{
	return(
		<div className="about">
		<div className="about2">
		<div className="about1">
		<h4>about us</h4>
		<h2>IT Solution Strategy Development For Your Bussiness</h2>
		<p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read.</p>
		<p><BiRightArrow/>Support via E-mail and Phone</p>
		<p><BiRightArrow/>Multi-Language Support</p>
		<button className="submit">Read More</button>
		
		</div>
		<img className="about-img" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwd29ya2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"/>
		</div>
		<div className= "advice">
		<h2>Get Free Advice</h2>
		<div className="advice-content">
		<input className="email-input" type="text" placeholder="Enter yourName"/>
		<input className="email-input" type="text" placeholder="Enter a valid email address"/>
		<button className="submit">SUBMIT</button>
		</div>
		</div>
		</div>

		);
}
export default AboutUs;