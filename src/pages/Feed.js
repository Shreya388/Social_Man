import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const Feed = () => {
    return ( 
        <div style={{marginTop: "60pt"}}>
            <Container>
                <div style={{background:"#51c3d3"}}>
                <div style={{padding: "13pt 0pt", textAlign: "left"}}>
                    <Button className="btn btn-light m-2">All</Button>
                    <Button className="btn btn-light m-2">Facebook</Button>
                    <Button className="btn btn-light m-2">Twitter</Button>
                    <Button className="btn btn-light m-2">Instagram</Button>
                    <Button className="btn btn-light m-2">Linkedin</Button>
                </div>
                </div>

                <div style={{background:"white" }}>
                    <Container>
                    <Row>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "13pt 0pt", height: "50pt" }}>
                            <p>My Tweets</p>
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "13pt 0pt", height: "50pt" }}>
                            <p>Replies</p>
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "13pt 0pt", height: "50pt" }}>
                            <p>Mentions</p>
                        </Col>
                    </Row>
                    </Container>
                </div>
                
                <div style={{background:"white" }}>
                    <Container style={{}}>
                    <Row>
                        <Col style={{ border: "1pt solid #dfdfdf", padding: "13pt 0pt"}}>
                            <h1 className="m-2 navbar-brand">John Doe</h1>
                            <p>lorem ipsum</p>
                    
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "13pt 0pt"}}>
                            <h1 className="navbar-brand">Matt</h1>
                            <p>lorem ipsum</p>
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "13pt 0pt" }}>
                            <h1 className="navbar-brand">Anna</h1>
                            <p>lorem ipsum</p>
                        </Col>
                    </Row>
                    </Container>
                </div>

                <div style={{background:"white" }}>
                    <Container style={{}}>
                    <Row>
                        <Col style={{ border: "1pt solid #dfdfdf", padding: "13pt 0pt"}}>
                            <h1 className="m-2 navbar-brand">Nick</h1>
                            <p>lorem ipsum</p>
                    
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "13pt 0pt"}}>
                            <h1 className="navbar-brand">Kate</h1>
                            <p>At vero eos et accusamus et iusto odio</p>
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "13pt 0pt" }}>
                            <h1 className="navbar-brand">Ryan</h1>
                            <p>praesentium voluptatum deleniti</p>
                        </Col>
                    </Row>
                    </Container>
                </div>

                <div style={{background:"white" }}>
                    <Container style={{}}>
                    <Row>
                        <Col style={{ border: "1pt solid #dfdfdf", padding: "13pt 0pt"}}>
                            <h1 className="m-2 navbar-brand">Nick</h1>
                            <p>lorem ipsum</p>
                    
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "13pt 0pt"}}>
                            <h1 className="navbar-brand">Matt</h1>
                            <p>lorem ipsum</p>
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "13pt 0pt" }}>
                            <h1 className="navbar-brand">Ryan</h1>
                            <p>lorem ipsum</p>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </Container>
        </div>
     );
}
 
export default Feed;