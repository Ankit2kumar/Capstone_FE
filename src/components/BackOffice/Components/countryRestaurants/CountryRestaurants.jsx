import React, { useState } from 'react';
import {
	Row,
	Form,
	Col,
	Button,
	OverlayTrigger,
	Tooltip,
} from 'react-bootstrap';

const CountryRestaurants = () => {
	const [viewDataComp, setViewDataComp] = useState(false);

	const [btnState, setBtnState] = useState(false);
	const addMore = () => {
		setViewDataComp(true);
		setBtnState(true);
	};
	return (
		<>
			<Row className="mb-3 hero-banner">
				<Form.Group as={Col} md={3}>
					<Form.Label>Restaurant Name</Form.Label>
					<Form.Control
						type="restaurantName"
						placeholder="Enter restaurant name"
					/>
				</Form.Group>

				<Form.Group as={Col} md={3}>
					<Form.Label>Restaurant Address</Form.Label>
					<Form.Control
						type="restaurantAddress"
						placeholder="Enter restaurant address"
					/>
				</Form.Group>
				<Form.Group as={Col} md={3}>
					<Form.Label>Image URL</Form.Label>
					<Form.Control type="url" placeholder="Image URL" />
				</Form.Group>
				<Form.Group as={Col} md={1}>
					<OverlayTrigger
						placement={'right'}
						overlay={<Tooltip>Click to add more Restaurants</Tooltip>}
					>
						<Button
							onClick={addMore}
							variant="primary"
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
							disabled={setBtnState}
						>
							+
						</Button>
					</OverlayTrigger>
				</Form.Group>
			</Row>
			{viewDataComp && <CountryRestaurants />}
		</>
	);
};

export default CountryRestaurants;
