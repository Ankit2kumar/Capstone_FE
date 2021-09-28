import React from 'react';
import AboutUs from '../About Us/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Destinations from '../Destinations/Destinations';
import Searchbar from '../Searchbar/Searchbar';

const HomePage = () => {
	return (
		<div>
			<Searchbar />
			<Destinations />
			<AboutUs />
			<ContactUs />
		</div>
	);
};

export default HomePage;
