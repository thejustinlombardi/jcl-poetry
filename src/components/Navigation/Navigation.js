import {
	Navbar,
	Container,
	Nav,
	Button,
	NavDropdown,
	Offcanvas,
	Form,
	FormControl,
} from "react-bootstrap";

import styles from "./Navigation.module.css";

function Navigation(props) {
	return (
		<div className={styles.nav_container}>
			<Navbar variant="light" expand={false}>
				<Container fluid>
					<Navbar.Brand href="#home">
						<img
							src="https://i.imgur.com/6hVEsYW.png"
							width="50"
							height="50"
							className="d-inline-block align-top"
							alt="JCL Logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="offcanvasNavbar" />
					<Navbar.Offcanvas
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
						placement="end">
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id="offcanvasNavbarLabel">
								JCL Poetry
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Nav.Link href="#action1">Home</Nav.Link>
								<Nav.Link href="#action2">Poems</Nav.Link>
								<Nav.Link href="#action2">Contact</Nav.Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</div>
	);
}

export default Navigation;
