import './Navbar.css';
import {
	Navbar,
	Container,
	Nav,
	NavDropdown,
	Form,
	Button,
	FormControl,
} from 'react-bootstrap';

const MyNavbar = () => {
	return (
		<div className="navBar">
			<Navbar bg="white" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">
						<img className=" logo_img" src="/logo.png" alt="Travelism logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<div className="dropdown">
								<NavDropdown title="Destinations" id="navbarScrollingDropdown">
									<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action5">
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title="Holiday Ideas" id="navbarScrollingDropdown">
									<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action5">
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown
									title="Weekend Getaways"
									id="navbarScrollingDropdown"
								>
									<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action5">
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
							</div>
						</Nav>
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default MyNavbar;
