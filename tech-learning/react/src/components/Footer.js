import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from "../logo.png"
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter, FaPhoneAlt, FaEnvelopeOpenText, FaClock, FaWhatsapp } from "react-icons/fa";
import AppImg from "../app-store.jpg"
import GoogleImg from "../google-play.jpg"
import Payment from "../payment-method.png"


export default function Footer()
{
    return (
        <footer>
            <Container className=" py-3">
                <div className="footer__upper-footer d-flex justify-content-between pb-2 mb-4 d-none d-md-flex">
                    <ul className="footer-list text-white-50 list-unstyled">
                        <li className="logo mp-3 p-0">
                            <Link to="/" className='d-flex align-items-center justify-content-between navbar-brand'>
                                <img className='nav-logo img-fluid' src={ Logo } alt='logo' />
                                <div className='d-flex flex-column align-itmes-center justify-content-center text-center app-nav__container text-light'>
                                    <p className='m-0'>Tech</p>
                                    <p className='m-0'>Learning</p>
                                </div>
                            </Link>
                        </li>
                        <li className='mb-3'><span className="text-white  px-1" > Address</span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</li>
                        <li className="mb-3"><FaPhoneAlt /><span className="text-white  px-1">Call Us : </span> +91 - 540-025-</li>
                        <li className="mb-3"><FaEnvelopeOpenText /><span className="text-white  px-1"> Email : </span> sale@Nest.com</li>
                        <li className="mb-3"><FaClock /><span className="text-white  px-1"> Hours : </span> 10:00 - 18:00, Mon</li>
                    </ul>
                    <ul className="footer-list text-white-50 list-unstyled">
                        <li className="text-white  mb-3 fs-5 ">Compeny</li>
                        <li>
                            <ul className="list-unstyled  p-2 ps-0  card-two-list-footer">
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">About Us</Link></li>
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">Delivery Information</Link></li>
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">Privacy Policy</Link></li>
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">Terms & Conditions</Link></li>
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">Contact Us</Link></li>
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">Support Center</Link></li>
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">Careers</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="footer-list text-white-50 list-unstyled">
                        <li className="text-white  mb-3 fs-5 ">Account</li>
                        <li>
                            <ul className="list-unstyled  p-2 ps-0  card-two-list-footer">
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">Sign In</Link></li>
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">View Cart</Link></li>
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">My Wishlist</Link></li>
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">Track My Order</Link></li>
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">Help Ticket</Link></li>
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">Shipping Details</Link></li>
                                <li><Link className="p-2 ps-0 d-block text-decoration-none " to="/">Compare products</Link></li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="footer-list text-white-50 list-unstyled">
                        <li className="text-white  mb-3 fs-5 ">Install App</li>
                        <li className="p-2 ps-0 d-block text-white-50 text-decoration-none ">From App Store or Google Play</li>
                        <li>
                            <div className=" d-flex  justify-content-center ">
                                <div className="w-50"><Link to="/"><img className="img-fluid" src={ GoogleImg } alt="google" /></Link></div>
                                <div className="w-50"><Link to="/"><img className="img-fluid" src={ AppImg } alt="app store" /></Link></div>
                            </div>
                        </li>
                        <li className="text-white-50 my-3">Secured Payment Gateways</li>
                        <li><Link to="/"><img className="img-fluid" src={ Payment } alt="icon" /></Link></li>
                    </ul>
                </div>
                <div className="footer__bottom-footer d-flex align-items-center justify-content-between">
                    <div className="text-white-50 w-25">© 2022, <span>Tech-Learning</span> - Courses Ecommerce Template All rights reserved</div>
                    <div className="d-flex w-50 justify-content-around">
                        <div className="third-nav__contact  d-flex align-items-top w-25">
                            <div className="third-nav__icon w-25">
                                <FaPhoneAlt />
                            </div>
                            <div className="third-nav__text ms-1 w-100">
                                <p className="mb-0 text-white fw-bold">1900 - 6666</p>
                                <p className="mb-0 second-p text-white-50">Working 8:00 - 22:00</p>
                            </div>
                        </div>
                        <div className="third-nav__contact  d-flex align-items-top  w-25">
                            <div className="third-nav__icon w-25">
                                <FaPhoneAlt />
                            </div>
                            <div className="third-nav__text ms-1 w-100">
                                <p className="mb-0 text-white fw-bold">1900 - 888</p>
                                <p className="mb-0 second-p text-white-50">24/7 Support Center</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-25">
                        <div className="d-flex align-items-center fs-6 justify-content-around">
                            <span className='text-white'>Follow Us</span>
                            <div className="footer-contact d-flex justify-content-around w-50">
                                <FaWhatsapp />
                                <FaFacebookF />
                                <FaTwitter />
                                <FaInstagram />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                    <div className="third-nav__text text-white-50 w-25">
                        <p className="w-100 m-0 text-end">Up to <span> 15% </span> discount on your first subscribe</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
