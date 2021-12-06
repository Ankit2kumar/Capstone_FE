import './ImageCarousel.css';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
	return (
		<>
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
						className="d-block w-75"
						src="/Carousel-Images/Chadar-Frozen-River-Trek-Ladakh.jpeg?text=Third slide&bg=20232a"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default ImageCarousel;
