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
	// const [data, setData] = useState({
	// 	title: [''],
	// 	description: [''],
	// 	url: [''],
	// });
	const [titles, setTitles] = useState([]);
	const [descs, setDescs] = useState([]);
	const [urls, setUrls] = useState([]);
	const [viewDataComp, setViewDataComp] = useState(false);
	const [btnState, setBtnState] = useState(false);
	const addMore = () => {
		setViewDataComp(true);
		setBtnState(true);
	};
	const _handleKeyDown = (e, func) => {
		if (e.key === 'Enter') {
			func(e);
			console.log(titles, descs, urls);
		}
	};

	const getTitle = (e) => {
		setTitles([...titles, e.target.value]);
	};
	const getDescs = (e) => {
		setDescs([...descs, e.target.value]);
	};
	const getUrl = (e) => {
		setUrls([...urls, e.target.value]);
	};
	// setData({ ...data, title: [...data.title, e.target.value] });
	// window.alert(data);
	// setTitles((prevState) => ({
	// 	titles: [...prevState.titles, e.target.value],
	// }));

	// const showOutput = (e) => {
	// 	window.alert(titles);
	// };
	return (
		<>
			<Row className="mb-3 hero-banner">
				<Form.Group as={Col} md={3}>
					<Form.Label>Title</Form.Label>
					<Form.Control
						value={titles[titles.length - 1]}
						onKeyDown={(event) => _handleKeyDown(event, getTitle)}
						type="title"
						placeholder="Enter title"
					/>
				</Form.Group>

				<Form.Group as={Col} md={3}>
					<Form.Label>Description</Form.Label>
					<Form.Control
						type="description"
						placeholder="description"
						value={descs[descs.length - 1]}
						onKeyDown={(event) => _handleKeyDown(event, getDescs)}
					/>
				</Form.Group>
				<Form.Group as={Col} md={3}>
					<Form.Label>Image URL</Form.Label>
					<Form.Control
						type="url"
						placeholder="Image URL"
						value={urls[urls.length - 1]}
						onKeyDown={(event) => _handleKeyDown(event, getUrl)}
					/>
				</Form.Group>

				<Form.Group as={Col} md={1}>
					<OverlayTrigger
						placement={'right'}
						overlay={<Tooltip>Click to add more Hero Banner Data</Tooltip>}
					>
						<Button
							disabled={btnState}
							onClick={addMore}
							variant="primary"
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
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
