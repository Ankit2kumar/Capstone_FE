import React from 'react';
import './Home.css';
import HeroBannerData from './HeroBannerData/HeroBannerData';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import CountryDestinations from './CountryDestinations/CountryDestinations';
import CountryHotels from './countryHotels/CountryHotels';
import CountryRomanticDestinations from './countryRomanticDestinations/CountryRomanticDestinations';
const Home = () => {
	const postData = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<section className="bckOffc-section">
				<Container>
					<h3 className="text-primary text-center mb-3">
						<strong>
							<u style={{ textDecorationColor: '#d1d1d1' }}>
								Welcome to Back Office
							</u>
						</strong>
					</h3>
					<Form>
						<Row>
							<h3
								style={{
									textShadow: '2px 2px 4px #000000',
									color: 'rgb(140, 172, 252)',
								}}
							>
								Country Data
							</h3>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Country name</Form.Label>
								<Form.Control
									type="countryname"
									placeholder="Enter country name"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Country Description</Form.Label>
								<Form.Control
									type="countrydescription"
									placeholder="Enter country description"
								/>
							</Form.Group>
						</Row>
						<Row>
							<h3
								style={{
									textShadow: '2px 2px 4px #000000',
									color: 'rgb(140, 172, 252)',
								}}
							>
								Hero Banner Data
							</h3>
						</Row>

						<HeroBannerData />

						<Row>
							<h4
								style={{
									textShadow: '2px 2px 4px #000000',
									color: 'rgb(140, 172, 252)',
								}}
							>
								Country Destinations
							</h4>
						</Row>

						<CountryDestinations />
						<Row>
							<h4
								style={{
									textShadow: '2px 2px 4px #000000',
									color: 'rgb(140, 172, 252)',
								}}
							>
								Country Hotels
							</h4>
						</Row>
						<CountryHotels />
						<Row>
							<h4
								style={{
									textShadow: '2px 2px 4px #000000',
									color: 'rgb(140, 172, 252)',
								}}
							>
								Country Restaurants
							</h4>
						</Row>
						<CountryHotels />
						<Row>
							<h4
								style={{
									textShadow: '2px 2px 4px #000000',
									color: 'rgb(140, 172, 252)',
								}}
							>
								Country Romantic destinations
							</h4>
						</Row>
						<CountryRomanticDestinations />
						<Button
							className="submit-btn"
							onClick={postData}
							style={{ padding: '20px' }}
							variant="success"
							type="submit "
						>
							Post Data
						</Button>
					</Form>
				</Container>
			</section>
		</>
	);
};
export default Home;
