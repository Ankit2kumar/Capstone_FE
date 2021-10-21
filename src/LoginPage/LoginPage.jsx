import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './LoginPage.css';
import { FcGlobe, FcCurrencyExchange, FcIdea } from 'react-icons/fc';

import { IconContext } from 'react-icons';
import { white } from 'material-ui/styles/colors';

function LoginPage() {
	return (
		<>
			{/* <section id="login">
				<Container>
					<Row className="my-flex">
						<Col sm={5} md={5} lg={5} className="col-1">
							Hello 1
						</Col>
						<Col sm={7} md={7} lg={7} className="col-2">
							Hello 2
						</Col>
					</Row>
				</Container>
			</section> */}

			{/* <section className="container">
				<div className="left-half">
					<div className="left-sub-half">
						<div
							className="my-4"
							style={{
								fontSize: '2rem',
								fontWeight: 'bolder',
								paddingTop: '4rem',
							}}
						>
							<u style={{ textDecorationColor: '#d15cb8' }}>Travel Explorer</u>
						</div>

						<div className="my-4" style={{ fontSize: '2rem' }}>
							<p> Explore your next travel </p> <p> destination </p>
						</div>

						<div className="my-5">
							<IconContext.Provider value={{ size: '3em' }}>
								<FcGlobe />
							</IconContext.Provider>

							<h4>Best travel website</h4>

							<p style={{ color: 'black' }}>
								More than 100,000 visitors per day, explore the best you can.
							</p>
						</div>

						<div className="my-5">
							<IconContext.Provider value={{ size: '4em' }}>
								<FcCurrencyExchange />
							</IconContext.Provider>

							<h4>Best travel website</h4>

							<p style={{ color: 'black' }}>
								More than 100,000 visitors per day, explore the best you can.
							</p>
						</div>
						<div className="my-5">
							<IconContext.Provider value={{ size: '3.5em' }}>
								<FcIdea />
							</IconContext.Provider>

							<h4>Best travel website</h4>

							<p style={{ color: 'black' }}>
								More than 100,000 visitors per day, explore the best you can.
							</p>
						</div>
					</div>
				</div>

				<div className="right-half">
					<div className="right-sub-half">
						<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
							<div>
								{' '}
								<p style={{ fontWeight: 'bolder' }}>
									Already have an account?
								</p>{' '}
							</div>
							<div>
								{' '}
								<Button variant="light">Sign In</Button>
							</div>
						</div>
						<Container>
							<Row
								style={{
									color: 'black',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<h2>Create your free account</h2>
							</Row>
						</Container>
					</div>
				</div>
			</section> */}
			<section style={{ position: 'absolute' }}>
				<Container fluid>
					<Row>
						<div
							style={{
								width: '200px',
								height: '200px',
								backgroundColor: 'white',
								position: 'relative',
								top: '50%',
								left: '50%',
							}}
						></div>
						<Col
							md={4}
							sm={4}
							lg={4}
							style={{ backgroundColor: 'blue', height: '100vh' }}
						></Col>
						<Col
							md={8}
							sm={8}
							lg={8}
							style={{ backgroundColor: 'black', height: '100vh' }}
						>
							2
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
}

export default LoginPage;
