import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";

const TopBar = () => {
    return ( 
        <Navbar bg="dark" expand="lg" variant="dark" style={{ padding: "0"}}>
            <Container>
            <Navbar.Brand href="#home">SocialMan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ padding: "15pt"}}/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-auto" style={{marginLeft: "auto", marginRight: "auto"}}>
                <Nav.Link active href="#home" style={{background: "#51c3d3", padding: "17pt"}}>Dashboard</Nav.Link>
                <Nav.Link href="#home" style={{ padding: "17pt"}}>Posts</Nav.Link>
                <Nav.Link href="#home" style={{ padding: "17pt"}}>Messages</Nav.Link>
                <Nav.Link href="#home" style={{ padding: "17pt"}}>Feeds</Nav.Link>
                <Nav.Link href="#link" style={{ padding: "17pt"}}>Tasks</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
    </Navbar>
     );
}
 
export default TopBar;