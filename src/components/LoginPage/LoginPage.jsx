import { Container, Row, Col, Navbar, Button } from 'react-bootstrap';
import './LoginPage.css';
import { ImFacebook } from 'react-icons/im';
import { ImGooglePlus } from 'react-icons/im';
import { GrLinkedinOption } from 'react-icons/gr';
const LoginPage = () => {
	return (
		<>
			<div className="main">
				<div class="triangle"></div>
				<Container>
					<Row className="margin">
						<Col sm={5} md={5} lg={5}>
							<span className="login">
								<Row>
									<Navbar.Brand href="#home" className="nav">
										<img src="/images/TravelExplorer.png" alt="" />
									</Navbar.Brand>
								</Row>
								<Row v>
									<h2 style={{ color: 'white' }}>Welcome Back!</h2>
								</Row>
								<Row className="mt-5">
									<span style={{ color: 'white' }}>
										{' '}
										To keep connected with us Please login with your personal
										info{' '}
									</span>
								</Row>
								<Row className="mt-5">
									<Button variant="outline-light">SIGN IN</Button>
								</Row>
							</span>
						</Col>
						<Col sm={7} md={7} lg={7}>
							<span className="register">
								{' '}
								<Row>
									<h2 style={{ color: 'green' }}>Create Account</h2>
								</Row>
								<Row>
									<Col>
										<Button className="logo-btn">
											<ImFacebook />
										</Button>
									</Col>
									<Col>
										<Button className="logo-btn">
											<ImGooglePlus />
										</Button>
									</Col>
									<Col>
										<Button className="logo-btn">
											<GrLinkedinOption />
										</Button>
									</Col>
								</Row>
								<Row className="mt-5">
									<span style={{ color: 'white' }}>
										{' '}
										To keep connected with us Please login with your personal
										info{' '}
									</span>
								</Row>
								<Row className="mt-5">
									<Button variant="outline-light">SIGN UP</Button>
								</Row>
							</span>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};
export default LoginPage;

// {/* <Container>
// 	<Row>
// 		<Col lg={5}>
// 			<div className="signIn">
// 				{/* <h1 style={{ color: 'white' }}>Welcome Back!</h1> */}
// 	<form className="loginForm">
// 		<label>Email</label>
// 		<input type="email" name="" id="" placeholder="Enter your email" />
// 		<label>Password</label>
// 		<input
// 			type="password"
// 			name=""
// 			id=""
// 			placeholder="Enter your password"
// 		/>
// 		<button className="loginButton">Login</button>
// 	</form>
// 	<button className="RegisterButton">Register</button>
// </div>
// 	</Col>
// 	<Col lg={7}>
// 		<div className="signUp"></div>
// 	</Col>
// </Row>
// </Container>; */}
