import React from 'react';
import './Destinations.css';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';

const Destinations = () => {
	return (
		<section className="destination">
			<div className="mx-5">
				<span>
					<h2>Destinations Travellers Love</h2>
				</span>

				<span>
					<h4>“Listen about the best from the Travellers”.</h4>{' '}
				</span>
			</div>

			<Container>
				<Row>
					<Col xs={12} sm={12} md={4} lg={4}>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="holder.js/100px180" />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
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
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
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
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
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
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Destinations;
