import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Login()
{
    const [ name, setName ] = useState( "" );
    const [ mail, setMail ] = useState( "" )
    const [ password, setPassword ] = useState( "" );
    const navigate = useNavigate();
    const submitHandler = ( e ) =>
    {
        e.preventDefault();
        const body = {
            "email": mail,
            "password": password,
            "firstname": name,
            "courses": []
        };

        axios.post( "http://localhost:7000/register", body, {
            headers: {
                'Content-Type': 'application/json',
            }
        } ).then( () =>
        {
            navigate( '/login' )
        } ).catch( () =>
        {
            toast.error( "Rigestration Failed" )
        } );
    };
    return (
        <div className="d-flex align-items-center justify-content-center text-white py-4">
            <Form onSubmit={ submitHandler } className="w-75 my-4 d-flex align-items-center justify-content-center flex-column">
                <h3>Sign Up</h3>
                <Form.Group className="mb-3" controlId="formBasiFirstName" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Your First Name"
                        value={ name }
                        onChange={ ( e ) => setName( e.target.value ) }
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Your Last Name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        value={ mail }
                        onChange={ ( e ) => setMail( e.target.value ) }
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        value={ password }
                        onChange={ ( e ) => setPassword( e.target.value ) }
                    />
                </Form.Group>
                <Button type="submit" className="app-nav__btn">
                    Sign Up
                </Button>
                <div className="p-3 fw-bold">
                    <Link to="/login" className="app-nav__link-color">have an acount ?</Link>
                </div>
            </Form>
        </div>
    );
}

export default Login;
