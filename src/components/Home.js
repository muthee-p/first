import React from 'react';

import './home.css';

const Home = () => {

return(
<div className="home">

	<div className="introduction">
		
		<div className="intro">
		<h1>We power innovation because we are innovators</h1>
		<p>Mollis aliquam ut porttitor leo a diam. Ac tortor vitae purus faucibus ornare. Sapien faucibus et molestie ac feugiat. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum.</p>
		<div className="intro-email">
	<input className="email-input" type="text" placeholder="YOUR EMAIL" />
	<button>Contact Us</button>
	</div>
		</div>
		<img className="intro-img" src="https://images.pexels.com/photos/1779724/pexels-photo-1779724.jpeg?auto=compress&cs=tinysrgb&w=600"/>
	</div>
	
</div>
);
}

export default Home;