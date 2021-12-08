import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const TopBar = () => {
    return ( 
            <Navbar className="fixed-top" bg="dark" expand="lg" variant="dark" style={{ padding: "0"}}>
              <Container>
              <Navbar.Brand href="#home">SocialMan</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ padding: "15pt"}}/>
                <Navbar.Collapse id="basic-navbar-nav">
                  
                  <Nav className="mr-auto ml-auto" style={{marginLeft: "auto", marginRight: "auto"}}>
                    <Link to="/" className="alink">Dashboard</Link>
                    <Link to="/posts" className="link">Posts</Link>
                    <Link to="/messages" className="link">Messages</Link>
                    <Link to="/feeds" className="link">Feed</Link>
                    <Link to="/tasks" className="link">Tasks</Link>
                    <Link to="/signIn" className=""><button className="">Log In</button></Link>
                  </Nav>
                
                </Navbar.Collapse>
              </Container>
            </Navbar>
     );
}
 
export default TopBar;