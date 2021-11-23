import React from 'react';
import AboutUs from '../../components/About Us/AboutUs';
import ContactUs from '../../components/ContactUs/ContactUs';
import Destinations from '../../components/Destinations/Destinations';
import Searchbar from '../../components/Searchbar/Searchbar';

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
