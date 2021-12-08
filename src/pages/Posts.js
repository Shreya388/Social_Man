import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import d from "./d.png";

const Cards =(props) => {
    return (
        <Col>
        <div>
            <Card>
            <Card.Img src={props.src} />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            </Card.Body>
            </Card>    
            
        </div>
        </Col>  
    )
}

const Posts = () => {
    return ( 
        <div className="posts" style={{marginTop: "100pt"}}>
            <Container>
              
            <Row>
                <Cards src={d} title="consectetur adipiscing elit" />
                <Cards src={d} title="sed do eiusmod tempor" />
                <Cards src={d} title="Duis aute irure dolor" />
            </Row>

            
            
            </Container>
        </div>
     );
}
 
export default Posts;