import React, {useState} from 'react';

import {BsFillPlusCircleFill} from "react-icons/bs";

const Faq = () =>{
	const QnA=[
	{
		question: 'Create a Webinar in Minutes',
		ans: 'Mattis nunc sed blandit libero volutpat. Tortor at risus viverra adipiscing at in tellus.'

	},
	{
		question: 'Business Sustainability Management',
		ans: 'Mattis nunc sed blandit libero volutpat2. Tortor at risus viverra adipiscing at in tellus2.'
	},
	{
		question: 'Learn how to grow your business',
		ans: 'Mattis nunc sed blandit libero volutpat3. Tortor at risus viverra adipiscing at in tellus3.'
	},
	{
		question: 'Practical tips to help you price your product',
		ans: 'Mattis nunc sed blandit libero volutpat4. Tortor at risus viverra adipiscing at in tellus4.'
		
	}
	];
	const [ show, setShow] = useState({});
	 const toggleAnswer = index => {
    setShow({
      ...show,
      [index]: !show[index]
    });
  };


	return(
	
		<div className="faqs">
		<div className="faqs-content">
		{QnA.map((question, index)=> (
			<div key={index}>
		<h4 onClick={()=> toggleAnswer(index)} className="inLine">{question.question}</h4>
		<button className="inLine" onClick={()=> toggleAnswer(index)}><BsFillPlusCircleFill/></button>
		<div>
		{show[index] && <p>{question.ans}</p>}
		</div>
		</div>
		))}
		</div>
		<img src="https://images.pexels.com/photos/6694486/pexels-photo-6694486.jpeg?auto=compress&cs=tinysrgb&w=600"/>
		</div>
		);
}
export default Faq;