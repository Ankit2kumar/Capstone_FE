import './ImageCarousel.css';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const ImageCarousel = () => {
	return (
		<>
			<Container fluid className="carousel-container">
				<Row>
					<Col xs={12} md={12} lg={6} xl={6}>
						<Carousel fade>
							<Carousel.Item>
								<img
									className="d-block w-75"
									src="/Carousel-Images/banner-img.webp?text=First slide&bg=373940"
									alt="First slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-75"
									src="/Carousel-Images/banner-img01.webp?text=Second slide&bg=282c34"
									alt="Second slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="/Carousel-Images/Chadar-Frozen-River-Trek-Ladakh.jpeg?text=Third slide&bg=20232a"
									alt="Third slide"
								/>
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col xs={12} md={12} lg={6} xl={6}>
						<div className="mt-3">
							{' '}
							<h1>Explore with us your perfect</h1>
						</div>
						<div>
							{' '}
							<h1>
								{' '}
								<strong style={{ color: ' orange' }}>
									Indian Holiday
								</strong>{' '}
							</h1>{' '}
						</div>
						<div></div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ImageCarousel;
