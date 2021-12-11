import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Messages = () => {
    return ( 
        <Container style={{}}>
            <Row style={{background: "white", marginTop: "59pt"}}>
                <Col sm={4} style={{border: "1pt solid #dddddd"}}>
                    <div>
                        
                    </div>        
                </Col>
                <Col sm={8} style={{border: "1pt solid #dddddd"}}>
                <div>
                        <h1 className="navbar-brand">Twitter User</h1>
                    </div>  
                </Col>
            </Row>

            <Row style={{background: "white", height: "470pt", textAlign: "left"}}>
                <Col sm={4} style={{border: "1pt solid #dddddd", padding:"0"}}>
                    <div style={{background: "#eeeeee", padding: "10pt 30pt"}}>
                        <p className="navbar-brand">Sneha</p>
                        <p className="">loren ipsum dolor sit amet</p>
                    </div>
                    <div style={{background: "white", padding: "10pt 30pt"}}>
                        <p className="navbar-brand">User</p>
                        <p className="">loren ipsum dolor sit amet</p>
                    </div>        
                </Col>
                <Col sm={8} style={{border: "1pt solid #dddddd"}}>
                <div>
                        
                    </div>  
                </Col>
            </Row>
        </Container>
        
     );
}
 
export default Messages;