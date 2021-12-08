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

            <Row style={{background: "white", height: "470pt"}}>
                <Col sm={4} style={{border: "1pt solid #dddddd"}}>
                    <div>
                        
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