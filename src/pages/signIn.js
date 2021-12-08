import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import "./style.css";
import "./signIn.css";

const SignIn = () => {
    return ( 
            <div className="col-md-12 d-flex justify-content-center" style={{marginTop: "100pt"}}>
            
            
            <div className="main">
                <Container>
                <h1 className="navbar-brand ">SocialMan</h1>
                <h1 className="display-6">Welcome Back!</h1><br />
                <Form.Control className="text-center input_box" type="text" placeholder="E-Mail" /><br />
                <Form.Control className="text-center input_box" type="text" placeholder="Password" /><br />
                <Button className="btn-primary m-2 buttons">Sign In</Button>
                <Button className="btn-danger m-2 buttons">Create Account</Button><br /><br />
                <a href="#a">forgot password?</a>
                <hr />
                <p>or Sign In with</p>

                </Container>
            </div>
            </div>
     );
}
 
export default SignIn;