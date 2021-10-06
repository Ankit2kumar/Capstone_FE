import React from 'react';
import './HeroBanner.css';
import { Carousel } from 'react-bootstrap';

function HeroBanner(props) {
	return (
		<>
			<Carousel.Item>
				<img
					className="d-block w-100 cntry-img"
					src={props.hero_img}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>{props.hero_title}</h3>
					<p>{props.hero_desc}</p>
				</Carousel.Caption>
			</Carousel.Item>
		</>
	);
}

export default HeroBanner;
