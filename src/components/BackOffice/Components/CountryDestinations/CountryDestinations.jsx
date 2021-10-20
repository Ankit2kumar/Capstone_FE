import { useState } from 'react';
import {
	Row,
	Col,
	Form,
	Button,
	OverlayTrigger,
	Tooltip,
} from 'react-bootstrap';
import './countryDestinations.css';

const CountryDestinations = () => {
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
					<Form.Label>Destination Name</Form.Label>
					<Form.Control
						type="destinationName"
						placeholder="Enter destination name"
					/>
				</Form.Group>

				<Form.Group as={Col} md={3} controlId="formGridPassword">
					<Form.Label>Destination Address</Form.Label>
					<Form.Control
						type="destinationAddress"
						placeholder="Enter destination address"
					/>
				</Form.Group>
				<Form.Group as={Col} md={3} controlId="formGridPassword">
					<Form.Label>Image URL</Form.Label>
					<Form.Control type="url" placeholder="Image URL" />
				</Form.Group>
				<Form.Group as={Col} md={1}>
					<OverlayTrigger
						placement={'right'}
						overlay={<Tooltip>Click to add more Country Destinations</Tooltip>}
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
			{viewDataComp && <CountryDestinations />}
		</>
	);
};

export default CountryDestinations;