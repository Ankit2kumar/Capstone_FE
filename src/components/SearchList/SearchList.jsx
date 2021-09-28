import React from 'react';
import './SearchList.css';
import { Row, Card, Button, Container } from 'react-bootstrap';

const SearchList = (props) => {
	const print = () => {
		console.log(props.value.description);
	};
	return (
		<Container>
			<Row>
				<Card style={{ width: '18rem' }}>
					{/* <Card.Img variant="top" src= ); {props.value.destination_img} /> */}
					<Card.Body>
						<Card.Title>Title</Card.Title>
						<Card.Text>Text</Card.Text>
						<Button onClick={print} variant="primary">
							Know More
						</Button>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
};

export default SearchList;
