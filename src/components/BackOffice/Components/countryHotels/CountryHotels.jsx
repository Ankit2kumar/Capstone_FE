import React, { useState } from 'react';
import './CountryHotels.css';
import {
	Row,
	Form,
	Col,
	Button,
	OverlayTrigger,
	Tooltip,
} from 'react-bootstrap';

const CountryHotels = () => {
	const [viewDataComp, setViewDataComp] = useState(false);

	const [btnState, setBtnState] = useState(false);
	const addMore = () => {
		setViewDataComp(true);
		setBtnState(true);
	};
	return (
		<>
			<Row className="mb-3 hero-banner">
				<Form.Group as={Col} md={3} controlId="formGridEmail">
					<Form.Label>Hotel Name</Form.Label>
					<Form.Control type="HotelName" placeholder="Enter Hotel name" />
				</Form.Group>

				<Form.Group as={Col} md={3} controlId="formGridPassword">
					<Form.Label>Hotel Address</Form.Label>
					<Form.Control type="HotelAddress" placeholder="Enter Hotel address" />
				</Form.Group>
				<Form.Group as={Col} md={3} controlId="formGridPassword">
					<Form.Label>Image URL</Form.Label>
					<Form.Control type="url" placeholder="Image URL" />
				</Form.Group>
				<Form.Group as={Col} md={1}>
					<OverlayTrigger
						placement={'right'}
						overlay={<Tooltip>Click to add more Hotels</Tooltip>}
					>
						<Button
							onClick={addMore}
							variant="primary"
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
							disabled={btnState}
						>
							+
						</Button>
					</OverlayTrigger>
				</Form.Group>
			</Row>
			{viewDataComp && <CountryHotels />}
		</>
	);
};

export default CountryHotels;
