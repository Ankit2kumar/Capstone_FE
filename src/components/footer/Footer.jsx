import { Col, Container, Row } from 'react-bootstrap';
import './footer.css';
import { ImLinkedin2 } from 'react-icons/im';
import { IconContext } from 'react-icons';
import { SiTwitter } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramLine } from 'react-icons/ri';
import { FaPinterestP } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
	return (
		<footer>
			<Container fluid>
				<Row>
					<div className="footer-menu">
						<Col className="footer-menu-first">
							<Row style={{ color: 'white', fontWeight: 'bolder' }}>
								IN THE MAIN SECTION
							</Row>
							<div className="footer-menu-first">
								<Row>Register Your HotelNew</Row>
								<Row>Package Tours</Row>
								<Row>Fix Departure Tours</Row>
								<Row>Top Tourist Attractions of India</Row>
								<Row>States of India</Row>
								<Row>Best Hotel Chains in India</Row>
								<Row>Top Travel Destinations</Row>
								<Row>Corporate Tour</Row>
								<Row>Book a hotel</Row>
								<Row>Rent A Car</Row>
								<Row>Air Tickets</Row>
								<Row>Company Profile</Row>
								<Row>Testimonials</Row>
								<Row>Contact Us</Row>
								<Row>Blog</Row>
							</div>
						</Col>
						<Col className="footer-menu-second">
							<Row style={{ color: 'white', fontWeight: 'bolder' }}>
								LEGAL POLICY
							</Row>
							<div className="footer-menu-second">
								<Row>Terms & Conditions</Row>
								<Row>Disclaimer</Row>
								<Row>Privacy Policy</Row>
								<Row>We are Hiring</Row>
								<Row>Share Your Travel Experience</Row>
							</div>
						</Col>
						<Col className="footer-menu-third">
							<Row style={{ color: 'white', fontWeight: 'bolder' }}>
								SOCIAL MEDIA
							</Row>
							<Row>
								<div className="footer-menu-third">
									<Col>
										<IconContext.Provider
											value={{ color: 'white', className: 'icon-styles' }}
										>
											<ImLinkedin2 />
										</IconContext.Provider>
									</Col>
									<Col>
										<IconContext.Provider
											value={{ color: 'white', className: 'icon-styles' }}
										>
											<SiTwitter />
										</IconContext.Provider>
									</Col>
									<Col>
										<IconContext.Provider
											value={{ color: 'white', className: 'icon-styles' }}
										>
											<FaFacebookF />
										</IconContext.Provider>
									</Col>
									<Col>
										<IconContext.Provider
											value={{ color: 'white', className: 'icon-styles' }}
										>
											<RiInstagramLine />
										</IconContext.Provider>
									</Col>
									<Col>
										<IconContext.Provider
											value={{ color: 'white', className: 'icon-styles' }}
										>
											<FaPinterestP />
										</IconContext.Provider>
									</Col>
									<Col>
										<IconContext.Provider
											value={{ color: 'white', className: 'icon-styles' }}
										>
											<IoLogoYoutube />
										</IconContext.Provider>
									</Col>
								</div>
							</Row>
						</Col>
					</div>
				</Row>
				<hr />
			</Container>
		</footer>
	);
};

export default Footer;
