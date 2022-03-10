import { Navbar, Container, Nav } from "react-bootstrap";

import styles from "./Navigation.module.css";

function Navigation(props) {
	return (
		<div className={styles.nav_container}>
			<Navbar variant="dark">
				<Container>
					<Navbar.Brand href="#home">
						<img
							src="https://i.imgur.com/6hVEsYW.png"
							width="50"
							height="50"
							className="d-inline-block align-top"
							alt="JCL Logo"
						/>
					</Navbar.Brand>
					<Nav>
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Poems</Nav.Link>
						<Nav.Link href="#pricing">Contact</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}

export default Navigation;
