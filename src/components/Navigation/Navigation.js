import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import styles from "./Navigation.module.css";

function Navigation(props) {
	return (
		<div>
			<Navbar expand="lg">
				<Container>
					<Navbar.Brand href="home">
						<img
							src="https://i.imgur.com/vgpwK15.png"
							width="70"
							height="70"
							className="d-inline-block align-top"
							alt="JCL Logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="home">Home</Nav.Link>
							<Nav.Link href="contact">Contact</Nav.Link>
							<NavDropdown title="Poems" id="basic-nav-dropdown">
								<NavDropdown.Item href="love-poems">Love</NavDropdown.Item>
								<NavDropdown.Item href="dark-poems">Dark</NavDropdown.Item>
								<NavDropdown.Item href="misc-poems">
									Miscellaneous
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Navigation;
