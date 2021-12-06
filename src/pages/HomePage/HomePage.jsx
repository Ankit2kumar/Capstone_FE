import './HomePage.css';
import AboutUs from '../../components/About Us/AboutUs';
import ImageCarousel from '../../components/Carousel/ImageCarousel';
import ContactUs from '../../components/ContactUs/ContactUs';
import Destinations from '../../components/Destinations/Destinations';
import Searchbar from '../../components/Searchbar/Searchbar';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import HomeRight from '../../HomeRight/HomeRight';
import Footer from '../../components/footer/Footer';
import CardNavigation from '../../HomeRight/CardNavigation';

const HomePage = () => {
	return (
		<>
			<Container fluid>
				<Row>
					<Col xs={12} md={12} lg={6} xl={6}>
						<ImageCarousel />
					</Col>
					<Col xs={12} md={12} lg={6} xl={6}>
						{/* <HomeRight /> */}
						<Row>
							<div className="mt-3">
								{' '}
								<h1>Explore with us your perfect</h1>
							</div>
						</Row>
						<Row>
							<h1>
								<strong style={{ color: ' orange' }}>Indian Holiday</strong>{' '}
							</h1>
						</Row>
						<Row>
							<p className="mt-4" style={{ color: 'grey' }}>
								Personalised, well-crafted packages for best experiences
							</p>
						</Row>

						<Row className="mt-5 ">
							<Col md={6} lg={6}>
								<CardNavigation />
							</Col>
							<Col md={6} lg={6}>
								<CardNavigation />
							</Col>
							<Col md={6} lg={6}>
								<CardNavigation />
							</Col>
							<Col md={6} lg={6}>
								<CardNavigation />
							</Col>
						</Row>
					</Col>
					{/* <Searchbar />
			<Destinations />
			<AboutUs />
			<ContactUs /> */}
				</Row>
				<Footer />
			</Container>
		</>
	);
};

export default HomePage;
