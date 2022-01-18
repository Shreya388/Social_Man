import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import user from "./user.png";
import "./Messages.css";

const UserList = (props) => {
    return (
        <div className={props.class}>
            <p className="navbar-brand"><img src={user} alt="us" height="40pt" />{props.name}</p>
            <p className="">{props.message}</p>
        </div>
    )
}

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
                <Col sm={4} className="p-0" style={{border: "1pt solid #dddddd"}}>

                    <input className="findChat" type="text" placeholder="Search Chat" />
                    <UserList class="activeUser" name="Sneha" message="Hi! What's up" />
                    <UserList class="User" name="User" message="Good morning" />
                    <UserList class="User" name="User" message="Good morning" />
                </Col>
                
                <Col sm={8} style={{border: "1pt solid #dddddd"}}>
                    <div style={{ marginTop:"420pt"}}>
                        <input type="text" className="chatInput"/>
                    </div>  
                </Col>
            </Row>
        </Container>
        
     );
}
 
export default Messages;