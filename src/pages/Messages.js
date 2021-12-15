import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import user from "./user.png";
import "./Messages.css";

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

                    <input className="chatInput" type="text" placeholder="Search Chat" />

                    <div style={{background: "rgb(233 233 233 / 76%)", padding: "5pt 30pt", borderBottom: "1pt solid #bdbdbdad"}}>
                    
                        <p className="navbar-brand"><img src={user} alt="us" height="40pt" /> Sneha</p>
                        <p className="">Hi, what's up</p>
                    </div>
                    <div style={{background: "white", padding: "5pt 30pt"}}>
                        <p className="navbar-brand"><img src={user} alt="us" height="40pt" />User</p>
                        <p className="">Good Morning! how are you?</p>
                    </div>        
                </Col>
                <Col sm={8} style={{border: "1pt solid #dddddd"}}>
                    <div style={{ marginTop:"420pt"}}>
                        <input type="text" style={{border: "1pt solid silver", borderRadius: "7pt", background: "rgba(233, 233, 233, 0.76)", padding:"6pt 10pt", width: "500pt"}}/>
                    </div>  
                </Col>
            </Row>
        </Container>
        
     );
}
 
export default Messages;