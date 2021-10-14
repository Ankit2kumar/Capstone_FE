// import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import './LandingPage.css';
import Navbar from '../Navbar';

const LandingPage = () => {
	return (
		<>
			<Navbar />
			{/* <div className="back">
				<div className="main">
					<Navbar variant="light" expand="md">
						<Container>
							<Navbar.Brand href="#home" className="nav">
								<img src="/images/TravelExplorer.png" alt="" />
							</Navbar.Brand>
						</Container>
						<Container>
							<Nav className="navItems">
								<Nav.Link href="#home">
									<strong> Home</strong>
								</Nav.Link>
								<Nav.Link href="#about">
									<strong> About</strong>
								</Nav.Link>
								<Nav.Link href="#contact">
									<strong> Contact</strong>
								</Nav.Link>
								<Nav.Link href="#pricing">
									<strong> Pricing</strong>
								</Nav.Link>
								<Nav.Link href="#Blog">
									<strong> Blog</strong>
								</Nav.Link>
							</Nav>
						</Container>
						<Container>
							<Nav className="navItems2">
								<Nav.Link href="login" className="login">
									<strong> Login</strong>
								</Nav.Link>
								<Button style={{ borderRadius: '8rem' }} className="register">
									<Nav.Link href="register">
										<strong> Register</strong>
									</Nav.Link>
								</Button>
							</Nav>
						</Container>
					</Navbar>
				</div>
			</div> */}
		</>
	);
};
export default LandingPage;
