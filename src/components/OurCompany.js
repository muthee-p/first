import React, { useRef } from 'react';
import { BsTelephoneFill } from "react-icons/bs";

const OurCompany = () =>{

  const textToCopy = '+1(234) 567-8910';
  const inputRef = useRef(null);

  const copyToClipboard = () => {
    inputRef.current.select();
    document.execCommand('copy');
    console.log(copyToClipboard);
  };

  const handleClick = () => {
    alert('phone number copied!');
  };


  
	return(
		<div className="company">
		<img className="company-img" src="https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZSUyMHdvcmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
		<div className="company-content">
		<h4> our company</h4>
		<h2>Sample ​Best IT-Solutions company near the world</h2>
		<p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
		<div>
		<h3>About Our Company</h3>
		<p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
		<h3>About Our Work</h3>
		<p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
		<h4 onClick={copyToClipboard} ref={inputRef}><BsTelephoneFill/><a href="" onClick={handleClick}>+1(234) 567-8910</a></h4>
		</div>
		</div>
		</div>

		);

}
export default OurCompany;