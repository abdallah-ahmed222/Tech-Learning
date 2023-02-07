import logo from '../logo.png'
import homeImg from "../home-img.webp"
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft } from "react-icons/fa";

function HomeHeading()
{
    return (
        <Container>
            <div className='d-flex my-4 align-items-center flex-column flex-lg-row'>
                <div className='hone-container my-3'>
                    <div className='d-flex align-items-start'>
                        <img src={ logo } alt="logo" className='logo' />
                        <div className="heading-wraber d-flex  flex-column">
                            <h2 className="static-text m-0 mt-2 pe-1 ">Tech Learning is The best place to Learn : </h2>
                            <ul className="dynaimc-text m-0 flex-end">
                                <li><span>HTML</span></li>
                                <li><span>CSS</span></li>
                                <li><span>JAVASCRIPT</span></li>
                                <li><span>REACT.JS</span></li>
                            </ul>
                        </div>
                    </div>
                    <p className='text-light p-2 px-5'>Tech-Learning is an online learning and teaching marketplace with over 213000 courses and 57 million students. Learn programmin languages</p>
                    <Button as={ Link } to="/signup" className='app-nav__btn p-3 ms-4 fw-bold'>Sign Up For free now <FaArrowAltCircleLeft className='ps-1 fs-4' /></Button>
                </div>
                <div className="hone-container my-3">
                    <img src={ homeImg } alt="homeImg" className="img-fluid" />
                </div>
            </div>
        </Container>


    )
}
export default HomeHeading;