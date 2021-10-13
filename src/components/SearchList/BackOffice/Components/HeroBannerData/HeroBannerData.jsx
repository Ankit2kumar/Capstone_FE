import { useState } from 'react';
import {
	Row,
	Form,
	Col,
	Button,
	OverlayTrigger,
	Tooltip,
} from 'react-bootstrap';
import './HeroBannerData.css';

const HeroBannerData = () => {
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
					<Form.Label>Title</Form.Label>
					<Form.Control type="title" placeholder="Enter title" />
				</Form.Group>

				<Form.Group as={Col} md={3}>
					<Form.Label>Description</Form.Label>
					<Form.Control type="description" placeholder="description" />
				</Form.Group>
				<Form.Group as={Col} md={3}>
					<Form.Label>Image URL</Form.Label>
					<Form.Control type="url" placeholder="Image URL" />
				</Form.Group>

				<Form.Group as={Col} md={1}>
					<OverlayTrigger
						placement={'right'}
						overlay={<Tooltip>Click to add more Hero Banner Data</Tooltip>}
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
			{viewDataComp && <HeroBannerData />}
		</>
	);
};

export default HeroBannerData;
