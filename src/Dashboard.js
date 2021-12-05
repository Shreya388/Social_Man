import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import TopBar from "./Navbar";
import d from "./d.png";

const Dashboard = () => {
    return (
        <>
        <TopBar /> 
        <Container>
        <Row>
        <Col md={4}>
            <div style={{padding: "20pt", marginTop: "20pt", border: "1pt solid #7c7c7c40", background: "white", borderRadius:"6pt", boxShadow: "1pt 1pt 1pt 1pt #e3e2e2"}}>
                <Container>
                    <h1 className="display-6">Baua</h1>
                    <p className="">Bauax@gmail.com</p>
                </Container>
            </div>
            <Row>
                <Col>
                    <div style={{padding: "10pt", marginTop:"10pt", border: "1pt solid #7c7c7c40", background: "white", borderRadius:"6pt", boxShadow: "1pt 1pt 1pt 1pt #e3e2e2"}}>
                        <h1 className="display-6">5k</h1>
                    </div>
                </Col>
                <Col>
                <div style={{padding: "10pt", marginTop:"10pt", border: "1pt solid #7c7c7c40", background: "white", borderRadius:"6pt", boxShadow: "1pt 1pt 1pt 1pt #e3e2e2"}}>
                <h1 className="display-6">160</h1>
                </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div style={{padding: "10pt", marginTop:"10pt", border: "1pt solid #7c7c7c40", background: "white", borderRadius:"6pt", boxShadow: "1pt 1pt 1pt 1pt #e3e2e2"}}>
                        <h1 className="display-6">120</h1>
                    </div>
                </Col>
                <Col>
                <div style={{padding: "10pt", marginTop:"10pt", border: "1pt solid #7c7c7c40", background: "white", borderRadius:"6pt", boxShadow: "1pt 1pt 1pt 1pt #e3e2e2"}}>
                <h1 className="display-6">50</h1>
                </div>
                </Col>
            </Row>
        </Col>
        <Col>
            <Card style={{ marginTop: "20pt", border: "1pt solid #7c7c7c40", boxShadow: "1pt 1pt 1pt 1pt #e3e2e2", borderRadius:"6pt"}}>
                <img src={d} alt="stats" style={{}} />    
            </Card>

        </Col>
        </Row>
        </Container>
        </>
     );
}
 
export default Dashboard;