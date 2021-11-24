import './ImageCarousel.css';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
	return (
		<div>
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-50 h-100"
						src="/Carousel-Images/golden-temple-image.jpeg?text=First slide&bg=373940"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-50 h-100"
						src="/Carousel-Images/qutub-minar-image.jpeg?text=Second slide&bg=282c34"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-50 h-100"
						src="/Carousel-Images/taj-mahal-india-hdr-wallpaper-preview.jpeg?text=Third slide&bg=20232a"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default ImageCarousel;
