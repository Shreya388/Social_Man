import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./Feed.css";

const Feed = () => {
    return ( 
        <div style={{marginTop: "60pt"}}>
            <Container>
                <div style={{background:"white"}}>
                <div style={{padding: "13pt 0pt", textAlign: "left"}}>

                <Button className="p-0" style={{borderRadius: "20pt", background: "white", border: "1pt solid rgb(225 223 223)"}}>
                    <Button className="m-0 button">All</Button>
                    <Button className="m-0 button">Facebook</Button>
                    <Button className="m-0 button">Twitter</Button>
                    <Button className="m-0 button">Instagram</Button>
                    <Button className="m-0 button">Linkedin</Button>
                </Button>    
                </div>
                </div>

                <div style={{background:"white", textAlign: "left" }}>
                    <Container>
                    <Row>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "20pt" }}>
                            <p className="navbar-brand">My Tweets</p>
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "20pt" }}>
                            <p className="navbar-brand">Replies</p>
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "20pt" }}>
                            <p className="navbar-brand">Mentions</p>
                        </Col>
                    </Row>
                    </Container>
                </div>
                
                <div style={{background:"white" }}>
                    <Container style={{textAlign: "left"}}>
                    <Row>
                        <Col style={{ border: "1pt solid #dfdfdf", padding: "20pt"}}>
                            <h1 className="blockquote">John Doe</h1>
                            <p className="blockquote-footer">lorem ipsum</p>
                    
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "20pt"}}>
                            <h1 className="blockquote">Matt</h1>
                            <p className="blockquote-footer">lorem ipsum</p>
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "20pt"}}>
                            <h1 className="blockquote">Anna</h1>
                            <p className="blockquote-footer">lorem ipsum</p>
                        </Col>
                    </Row>
                    </Container>
                </div>

                <div style={{background:"white", textAlign: "left" }}>
                    <Container style={{}}>
                    <Row>
                        <Col style={{ border: "1pt solid #dfdfdf", padding: "20pt"}}>
                            <h1 className="blockquote">Nick</h1>
                            <p className="blockquote-footer">lorem ipsum</p>
                    
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "20pt"}}>
                            <h1 className="blockquote">Kate</h1>
                            <p className="blockquote-footer">At vero eos et accusamus et iusto odio</p>
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "20pt"}}>
                            <h1 className="blockquote">Ryan</h1>
                            <p className="blockquote-footer">praesentium voluptatum deleniti</p>
                        </Col>
                    </Row>
                    </Container>
                </div>

                <div style={{background:"white" }}>
                    <Container style={{ textAlign: "left"}}>
                    <Row>
                        <Col style={{ border: "1pt solid #dfdfdf", padding: "20pt"}}>
                            <h1 className="m-2 blockquote">Nick</h1>
                            <p className="blockquote-footer">lorem ipsum</p>
                    
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "20pt"}}>
                            <h1 className="blockquote">Matt</h1>
                            <p className="blockquote-footer">lorem ipsum</p>
                        </Col>
                        <Col style={{border: "1pt solid #dfdfdf", padding: "20pt"}}>
                            <h1 className="blockquote">Ryan</h1>
                            <p className="blockquote-footer">lorem ipsum</p>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </Container>
        </div>
     );
}
 
export default Feed;