import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaLaptopCode, FaTabletAlt, FaDatabase } from "react-icons/fa";
import Head from './Head';
export default function Tracks()
{
    return (
        <div className='main-container my-4 pt-2'>
            <Container className='text-white d-flex align-items-center flex-column flex-lg-row'>
                <div className='hone-container text-center px-4'>
                    <Head text="TRACKS" />
                    <p>To streamline your learning experience, pick a Track to begin your ride on The Coding Train. “Main Tracks” are sequenced video tutorials that you can follow like a course syllabus. “Side Tracks” are collections of related videos but don’t necessarily need to be watched in order.</p>
                </div>
                <div className='hone-container py-5'>
                    <Row xs={ 1 } md={ 2 } lg={ 3 } className="g-4">
                        <Col>
                            <Card className='track'>
                                <FaLaptopCode className='track-icon' />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>Frond-end</Card.Title>
                                    <Card.Text>
                                        Become a front end web developer and learn how to build high quality websites and dynamic applications
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='track'>
                                <FaDatabase className='track-icon' />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>Back-end</Card.Title>
                                    <Card.Text>
                                        Become a Back end web developer and learn how to build high quality Databases and dynamic applications
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='offset-md-3 offset-lg-0'>
                            <Card className='track'>
                                <FaTabletAlt className='track-icon' />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>Mobile-App</Card.Title>
                                    <Card.Text>
                                        Become a Mobile application developer and learn how to build high quality dynamic Mobile applications
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
