import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLog } from "../hooks/useLog";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { clearCart } from "../rtk/slices/CartSlice";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
export default function CheckoutPage()
{
    const { logged } = useLog();
    const navigate = useNavigate();
    const cart = useSelector( state => state.cart )
    let total = cart.reduce( ( accumulator, currentValue ) => accumulator + currentValue.price, 0 )
    const userId = localStorage.getItem( "id" )
    const dispatch = useDispatch()
    function setInLocal( eve )
    {
        eve.preventDefault()
        localStorage.setItem( "courses", JSON.stringify( cart ) )
        const body = {
            "courses": cart,
            "date": new Date()
        }
        axios.patch( `http://localhost:7000/users/${ userId }`, body ).then( () =>
        {
            dispatch( clearCart() )
            localStorage.removeItem( "cartItems" )
            localStorage.removeItem( "courses" )
            navigate( "/" );
            toast.success( "payment sucsess" );
        } )
    }
    useEffect( () =>
    {
        if ( !logged )
        {
            navigate( "/login" );
        }
    }, [ logged ] );
    return (
        <div className="text-white">
            <Container className="my-4">
                <Form className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
                    <div className="w-50 mx-3">
                        <h3>Checkout</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name on Card</Form.Label>
                            <Form.Control type="text" required placeholder="Name on Card" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Card number</Form.Label>
                            <Form.Control type="text" required placeholder="0000 0000 0000" />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicpp">
                            <div >
                                <Form.Label>cvc - cvv</Form.Label>
                                <Form.Control type="text" required placeholder="cvc" />
                            </div>
                            <div className="mx-1">
                                <Form.Label>Expiry date</Form.Label>
                                <Form.Control type="text" required placeholder="03 - 33" />
                            </div>
                        </Form.Group>
                    </div>
                    <div className="summry w-25">
                        <h3>Summry</h3>
                        <div className="text-white">
                            <p className="d-flex align-items-center justify-content-between"><span>Original:</span> <span> ${ total }</span></p>
                            <p className="border-bottom m-0 d-flex align-items-center justify-content-between"><span>Discounts</span> <span> ${ 0 }</span></p>
                            <p>total is ${ total }</p>
                            <Button type="submit" className="app-nav__btn m-0" onClick={ ( eve ) => setInLocal( eve ) }>Proceed</Button>
                            <p className=" mt-3 text-white-50">30-Day Money-Back Guarantee</p>
                        </div>
                    </div>
                </Form>


            </Container>

        </div>
    );
}

