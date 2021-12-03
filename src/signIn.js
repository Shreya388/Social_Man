import React from "react";
import { Form, Container, Button } from "react-bootstrap";

const SignIn = () => {
    return ( 
            <div className="col-md-12 d-flex justify-content-center" style={{marginTop: "90pt"}}>
            
            
            <div style={{maxWidth: "400pt", background: "#fbfbfb",  borderRadius:" 9pt",  padding: "40pt 40pt",  border: "1pt solid #e5e5e5"}}>
                <Container>
                <h1 className="navbar-brand">SocialMan</h1>
                <h1 className="display-6">Welcome Back!</h1><br />
                <Form.Control className="text-center" type="text" placeholder="E-Mail" /><br />
                <Form.Control className="text-center" type="text" placeholder="Password" /><br />
                <Button className="m-2">Sign In</Button>
                <Button className="btn-danger m-2">Create Account</Button><br /><br />
                <a href="#a">forgot password?</a>
                <hr />
                <p>or Sign In with</p>

                </Container>
            </div>
            </div>
     );
}
 
export default SignIn;