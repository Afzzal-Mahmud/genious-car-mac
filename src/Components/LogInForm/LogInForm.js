import { Button } from "react-bootstrap";
import React from "react";

function LogInForm() {
    return(
        <div>
            <h1>Please in With Google</h1>
            <Button 
            className='text-center 
                       bg-primary 
                       fw-bold'>
                Sign In With Google
                </Button>
        </div>
    )
}
export default LogInForm;