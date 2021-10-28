import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './LoginPage.css';
import { FcGlobe, FcCurrencyExchange, FcIdea } from 'react-icons/fc';
import { IconContext } from 'react-icons';

function LoginPage() {
	return (
		<>
			<section className="container">
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
						<div
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
								marginTop: '55px',
								marginRight: '25px',
							}}
						>
							<div
								style={{
									marginTop: '5px',
									marginRight: '23px',
								}}
							>
								<p>Already have an account?</p>
							</div>
							<div>
								{' '}
								<Button variant="light">Sign In</Button>
							</div>
						</div>
						<Container>
							<Row className="pt-5">
								<Col md={3} lg={3}></Col>
								<Col>
									<h2>Create your free account</h2>
								</Col>
								<Col md={3} lg={3}></Col>
							</Row>
							<Row className="pt-5">
								<Col md={4} lg={4}></Col>
								<Col>
									<Button variant="secondary" size="lg">
										Sign in with Google
									</Button>
								</Col>

								<Col md={4} lg={4}></Col>
							</Row>
							<Row className="pt-5">
								<Col md={4} lg={4}></Col>
								<Col>
									<Button variant="secondary" size="lg">
										Sign in with facebook
									</Button>
								</Col>

								<Col md={4} lg={4}></Col>
							</Row>
							<Row className="pt-5">
								<Col md={1} lg={1}></Col>
								<Col md={4} lg={4}>
									<hr></hr>
								</Col>
								<Col>
									<span>OR</span>{' '}
								</Col>
								<Col md={5} lg={5}>
									<hr></hr>
								</Col>
								<Col md={1} lg={1}></Col>
							</Row>
							<Row></Row>
							<Row></Row>
							<Row></Row>
							<Row></Row>
						</Container>
					</div>
				</div>
			</section>
		</>
	);
}

export default LoginPage;
