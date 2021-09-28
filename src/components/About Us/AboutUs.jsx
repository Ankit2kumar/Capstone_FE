import React from 'react';
import './AboutUs.css';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';

const AboutUs = () => {
	return (
		<>
			<section className="my-4" id="about-us">
				<h2 className="mx-5 ">About Us</h2>
				<h4 className="mx-5 ">
					“Travel is the main thing you purchase that makes you more
					extravagant”.
				</h4>
				<Container>
					<Row>
						<Col xs={12} sm={12} md={4} lg={4}>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} sm={12} md={4} lg={4}>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} sm={12} md={4} lg={4}>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} sm={12} md={4} lg={4}>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};
export default AboutUs;
