import React from 'react';
import styled from 'styled-components';
import { Nav, Button, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Container = styled.div`
	/* height: 5vh; */
	background-color: white;
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #a1d1e530;
`;
const Left = styled.div`
	flex: 1;
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const Centre = styled.div`
	display: flex;
	flex: 2;
	align-items: center;
	justify-content: center;
`;

const MyNavbar = () => {
	return (
		<>
			<Container>
				<Wrapper>
					<Navbar.Brand href="#home">
						<img
							src="/travelism.png"
							height="100px"
							className="d-inline-block align-top"
							alt="Travelism Logo"
						/>
					</Navbar.Brand>

					<Centre>
						<Nav.Link>
							<Link to="/">Home </Link>
						</Nav.Link>
						<Nav.Link href="#link">Menu</Nav.Link>
						<Nav.Link href="#link"> About Us</Nav.Link>
						<Nav.Link href="#link">Contact Us</Nav.Link>
					</Centre>
					<Right>
						<NavDropdown title="Profile" id="basic-nav-dropdown">
							<NavDropdown.Item>
								<Button variant="outline-secondary">
									{' '}
									<Link to="/login">LogIn</Link>
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Button variant="outline-secondary">SignUp</Button>
							</NavDropdown.Item>

							<NavDropdown.Divider />
							<NavDropdown.Item>
								<Button variant="outline-secondary">
									<Link to="/backoffice"> Back Office</Link>
								</Button>
							</NavDropdown.Item>
						</NavDropdown>
					</Right>
				</Wrapper>
			</Container>
		</>
	);
};

export default MyNavbar;
