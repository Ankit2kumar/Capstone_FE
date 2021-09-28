import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactUs.css';
import { GrFacebook } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';
import { GrPinterest } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';

const ContactUs = () => {
	return (
		<>
			<section className="contact-us">
				<h3>Contact Us</h3>
				<Container className="contact-us-rows">
					<Row>
						<Col>
							<Col>Ankit</Col>
							<Col>Kumar</Col>
						</Col>
						<Col>
							<Col>About Travel Explorer</Col>
							<Col>Press</Col>
							<Col>Careers</Col>
							<Col>Investors Relation</Col>
							<Col>Blog</Col>
							<Col>Help Centre</Col>
						</Col>
					</Row>
					<div className="icons">
						<GrFacebook />
						<FaTwitter />
						<GrPinterest />
						<GrInstagram />
					</div>
				</Container>
			</section>
		</>
	);
};

export default ContactUs;
