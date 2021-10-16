import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { Button, Container, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
// import useEmailAndPassword from "../../Mathods/useEmailAndPassword";

function LogInForm() {
    const {signInUsingGoogle,setUser} = useAuth()
    // const [email,setEmail] = useState('')
    // const [password,setPassword] = useState('')
    const [isLogIn,setIsLogIn] = useState(false)


    /* function for create user */
    function CreateUser(email,password) {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
        })  
       }
       /* create user end */


    /* function for signIn user */
    function signInUser(email,password) {
        const auth = getAuth()
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
        })  
       }
       /* SignIn user end */

       
    // const {logInUsingEmail} = useEmailAndPassword(email,password)
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
     } = useForm();

     function takeValueAndLogIn(data) {
         const userEmail = data.email
         const userPassword = data.password
        //  setEmail(userEmail)
        //  setPassword(userPassword)
        {
            isLogIn ?  signInUser(userEmail,userPassword)
                    : CreateUser(userEmail,userPassword)
        }
        console.log(userPassword,userEmail)
     }
     function haveAccount(e) {
         setIsLogIn(e.target.checked)
     }
    return (
        <>
            <Container>
                <h2>Please
                {isLogIn ? " Log In"
                : " Sign Up With Your Email and Password"
                }</h2>
                <Form onSubmit = {handleSubmit(takeValueAndLogIn)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                        {...register("email", { required: "email is required",
                        pattern: {
                            value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "invalid email"
                        }})}/>
                        {errors.email && (<small className='text-danger'>{errors.email.message}</small>)} <br />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                        {...register("password", { required: 'The password must be at least 8 carecter long',
                        minLength : {
                            value: 8,
                            message: "Password should be 6 carecter long"
                        }})}/>
                        {errors.password && (<small className='text-danger'>{errors.password.message}</small>)}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={haveAccount} type="checkbox" label="if you already have an account chack this" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        { isLogIn ?"Log In" : "Sign Up" }
                    </Button>
                </Form>
            </Container>
            <Container className='text-center'>
            <h1>Log in With Google</h1>
            <Button
                onClick={signInUsingGoogle}
                className='bg-primary 
                            fw-bold'>
                Sign In With Google
            </Button>
            </Container>
        </>
    )
}
export default LogInForm;