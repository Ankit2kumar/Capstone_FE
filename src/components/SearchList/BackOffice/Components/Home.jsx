import React from 'react';
import './Home.css';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
const Home = () => {
	// heroBanner: {
	//     heroImg: { type: [imageSchema] },
	//     heroTitle: { type: [String], required: true },
	//     heroDescription: { type: [String], required: true },
	// },
	// countryDetails: {
	//     country_name: { type: String, required: true },
	//     description: { type: String, required: true },
	//     destinations: { type: [destinationSchema] },
	//     hotels: { type: [hotelSchema] },
	//     restaurants: { type: [restaurantSchema] },
	//     romance: { type: [romanceSchema] },
	// }
	const postData = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<section className="bckoffc-section">
				<Container>
					<h3 className="text-primary text-center mb-5">
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
								Hero Banner Data
							</h3>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Title</Form.Label>
								<Form.Control type="title" placeholder="Enter title" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Description</Form.Label>
								<Form.Control type="description" placeholder="description" />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Title</Form.Label>
								<Form.Control type="title" placeholder="Enter title" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Description</Form.Label>
								<Form.Control type="description" placeholder="description" />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Title</Form.Label>
								<Form.Control type="title" placeholder="Enter title" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Description</Form.Label>
								<Form.Control type="description" placeholder="description" />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
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
							<h4
								style={{
									textShadow: '2px 2px 4px #000000',
									color: 'rgb(140, 172, 252)',
								}}
							>
								Country Destinations
							</h4>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Destination Name</Form.Label>
								<Form.Control
									type="destinationname"
									placeholder="Enter destination name"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Destination Address</Form.Label>
								<Form.Control
									type="destinationaddress"
									placeholder="Enter destination address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Destination Name</Form.Label>
								<Form.Control
									type="destinationname"
									placeholder="Enter destination name"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Destination Address</Form.Label>
								<Form.Control
									type="destinationaddress"
									placeholder="Enter destination address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Destination Name</Form.Label>
								<Form.Control
									type="destinationname"
									placeholder="Enter destination name"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Destination Address</Form.Label>
								<Form.Control
									type="destinationaddress"
									placeholder="Enter destination address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Destination Name</Form.Label>
								<Form.Control
									type="destinationname"
									placeholder="Enter destination name"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Destination Address</Form.Label>
								<Form.Control
									type="destinationaddress"
									placeholder="Enter destination address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
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
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Hotel Name</Form.Label>
								<Form.Control type="Hotelname" placeholder="Enter Hotel name" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Hotel Address</Form.Label>
								<Form.Control
									type="Hoteladdress"
									placeholder="Enter Hotel address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Hotel Name</Form.Label>
								<Form.Control type="Hotelname" placeholder="Enter Hotel name" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Hotel Address</Form.Label>
								<Form.Control
									type="Hoteladdress"
									placeholder="Enter Hotel address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Hotel Name</Form.Label>
								<Form.Control type="Hotelname" placeholder="Enter Hotel name" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Hotel Address</Form.Label>
								<Form.Control
									type="Hoteladdress"
									placeholder="Enter Hotel address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Hotel Name</Form.Label>
								<Form.Control type="Hotelname" placeholder="Enter Hotel name" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Hotel Address</Form.Label>
								<Form.Control
									type="Hoteladdress"
									placeholder="Enter Hotel address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
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
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Restaurant Name</Form.Label>
								<Form.Control
									type="restaurantname"
									placeholder="Enter restaurant name"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Restaurant Address</Form.Label>
								<Form.Control
									type="restaurantaddress"
									placeholder="Enter restaurant address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Restaurant Name</Form.Label>
								<Form.Control
									type="restaurantname"
									placeholder="Enter restaurant name"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Restaurant Address</Form.Label>
								<Form.Control
									type="restaurantaddress"
									placeholder="Enter restaurant address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Restaurant Name</Form.Label>
								<Form.Control
									type="restaurantname"
									placeholder="Enter restaurant name"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Restaurant Address</Form.Label>
								<Form.Control
									type="restaurantaddress"
									placeholder="Enter restaurant address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Restaurant Name</Form.Label>
								<Form.Control
									type="restaurantname"
									placeholder="Enter restaurant name"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Restaurant Address</Form.Label>
								<Form.Control
									type="restaurantaddress"
									placeholder="Enter restaurant address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
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
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Destination Name</Form.Label>
								<Form.Control
									type="restaurantname"
									placeholder="Enter restaurant name"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Destination Address</Form.Label>
								<Form.Control
									type="destinationaddress"
									placeholder="Enter destination address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Destination Name</Form.Label>
								<Form.Control
									type="destinationname"
									placeholder="Enter destination name"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Destination Address</Form.Label>
								<Form.Control
									type="destinationaddress"
									placeholder="Enter destination address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Destination Name</Form.Label>
								<Form.Control
									type="destinationname"
									placeholder="Enter destination name"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Destination Address</Form.Label>
								<Form.Control
									type="destinationaddress"
									placeholder="Enter destination address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>
						<Row className="mb-3 hero-banner">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Destination Name</Form.Label>
								<Form.Control
									type="destinationname"
									placeholder="Enter destination name"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Destination Address</Form.Label>
								<Form.Control
									type="destinationaddress"
									placeholder="Enter destination address"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Image URL</Form.Label>
								<Form.Control type="url" placeholder="Image URL" />
							</Form.Group>
						</Row>

						{/* <Form.Group className="mb-3" controlId="formGridAddress1">
							<Form.Label>Address</Form.Label>
							<Form.Control placeholder="1234 Main St" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formGridAddress2">
							<Form.Label>Address 2</Form.Label>
							<Form.Control placeholder="Apartment, studio, or floor" />
						</Form.Group>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridCity">
								<Form.Label>City</Form.Label>
								<Form.Control />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridState">
								<Form.Label>State</Form.Label>
								<Form.Select defaultValue="Choose...">
									<option>Choose...</option>
									<option>...</option>
								</Form.Select>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridZip">
								<Form.Label>Zip</Form.Label>
								<Form.Control />
							</Form.Group>
						</Row>

						<Form.Group className="mb-3" id="formGridCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group> */}

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
