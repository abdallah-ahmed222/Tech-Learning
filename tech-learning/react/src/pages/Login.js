import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login()
{
    const [ name, setName ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const cart = useSelector( state => state.cart );
    const navigate = useNavigate();

    const submitHandler = ( e ) =>
    {
        e.preventDefault();
        const body = {
            email: name,
            password,
        };
        axios.post( "http://localhost:7000/login", body, {
            headers: {
                'Content-Type': 'application/json',
            }
        } ).then( ( { data } ) =>
        {
            localStorage.setItem( 'token', data.accessToken );
            localStorage.setItem( 'user', JSON.stringify( data.user.position ) );
            localStorage.setItem( 'id', JSON.stringify( data.user.id ) )
            localStorage.setItem( 'name', JSON.stringify( data.user.firstname ) )
            if ( cart.length )
            {
                navigate( '/checkout' )
            } else
            {
                navigate( '/' )
                toast.success( `Welcome Back ${ data.user.firstname }` )
            }
        } ).catch( () =>
        {
            toast.error( "userName or password is Incorrect" )
        } );
    };
    return (
        <div className="d-flex align-items-center justify-content-center text-white py-4">
            <Form onSubmit={ submitHandler } className="w-75 my-4 d-flex align-items-center justify-content-center flex-column">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        value={ name }
                        onChange={ ( e ) => setName( e.target.value ) }
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
                <Button variant="primary" type="submit" className="app-nav__btn">
                    Sign In
                </Button>
                <div className="p-3">
                    <Link to="/signup" className="app-nav__link-color">Don't have an acount</Link>
                </div>
            </Form>
        </div>
    );
}

export default Login;
