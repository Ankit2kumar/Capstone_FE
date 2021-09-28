import React from 'react';
import styled from 'styled-components';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Container = styled.div`
	height: 60px;
	background-color: lightcyan;
`;
const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: lightcyan;
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
			<Container className="mb-5">
				<Wrapper>
					<Left>
						<img className="nav-img" src="/TravelExplorer.png" alt="" />
					</Left>
					<Centre>
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Menu</Nav.Link>
						<Nav.Link href="#link"> About Us</Nav.Link>
						<Nav.Link href="#link">Contact Us</Nav.Link>
					</Centre>
					<Right>
						<Button variant="outline-secondary">
							{' '}
							<Link to="/LoginPage"></Link>
							LogIn
						</Button>
						<Button variant="outline-secondary">SignUp</Button>
					</Right>
				</Wrapper>
			</Container>
		</>
	);
};

export default MyNavbar;
