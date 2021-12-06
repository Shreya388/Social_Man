import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import TopBar from "./Navbar";
import d from "./d.png";
import "./Dashboard.css";
import Posts from "./pages/Posts";

const Dashboard = () => {
    return (
        <>
        <TopBar /> 
        <Container>
        <Row>
        <Col md={4}>
            <div className="user">
                <Container>
                    <h1 className="display-6">Baua</h1>
                    <p className="">Bauax@gmail.com</p>
                </Container>
            </div>
            <Row>
                <Col>
                    <div className="views_sec">
                        <h1 className="display-6">5k</h1>
                        <p className="">Impressions</p>
                    </div>
                </Col>
                <Col>
                <div className="views_sec">
                <h1 className="display-6">170</h1>
                <p className="">Comments</p>
                </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="views_sec">
                        <h1 className="display-6">120</h1>
                        <p className="">Likes</p>
                    </div>
                </Col>
                <Col>
                <div className="views_sec">
                <h1 className="display-6">50</h1>
                <p className="">Mentions</p>
                </div>
                </Col>
            </Row>
        </Col>
        <Col>
            <Card className="card_sec" >
                <img src={d} alt="stats" />    
            </Card>

        </Col>
        </Row>
        </Container>

        
        </>
     );
}
 
export default Dashboard;