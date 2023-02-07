import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Head from '../components/Head';
import Modal from 'react-bootstrap/Modal';
import Iframe from 'react-iframe'

function MyVerticallyCenteredModal( props )
{
    const courseLink = props.data;

    return (
        <Modal
            { ...props }
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='rounded'
        >
            <Modal.Body>
                <Iframe url={ courseLink }
                    width="100%"
                    height="500px"
                    display="block"
                    position="relative" />
            </Modal.Body>
            <div className='p-2'>
                <Button className='app-nav__btn' onClick={ props.onHide }>Close</Button>
            </div>
        </Modal>
    );
}

export default function UserCourses()
{
    const [ modalShow, setModalShow ] = useState( false );
    const id = localStorage.getItem( "id" )
    const [ data, setData ] = useState( [] );
    const [ courseLink, setCourseLink ] = useState( [] );
    useEffect( () =>
    {
        axios.get( `http://localhost:7000/users/${ id }` ).then( ( res ) => setData( res.data.courses ) )
    }, [ id ] )
    const courses = data;
    return (
        <Container className='text-black py-4 my-3'>
            { courses.length ? <>
                <Head text="Your Courses" />
                <Row xs={ 1 } md={ 2 } lg={ 3 } className="g-4 py-4">
                    {
                        courses.map( ( course ) =>
                        (
                            <Col key={ course.id } className="d-flex justify-content-center">
                                < Card className='cours-card d-flex justify-content-center align-items-center py-3'>
                                    <span className='count'>{ course.id }</span>
                                    <Card.Img variant="top" src={ course.src } alt='img' />
                                    <Card.Body className='w-100 d-flex align-items-center flex-column'>
                                        <Card.Title className='fw-bold w-100 fs-3'>{ course.title }</Card.Title>
                                        <Card.Text className='m-0 w-100'>
                                            { course.disc }
                                        </Card.Text>
                                    </Card.Body>
                                    <>
                                        <Button className='mt-3 m-auto app-nav__btn' onClick={ () =>
                                        {
                                            setModalShow( true )
                                            setCourseLink( course.link )
                                        } }>
                                            Coueses
                                        </Button>

                                        <MyVerticallyCenteredModal

                                            data={ courseLink }
                                            show={ modalShow }
                                            onHide={ () => setModalShow( false ) }
                                        />
                                    </>
                                </Card >
                            </Col>
                        ) )
                    }
                </ Row>
            </> : <div className='d-flex justify-content-center align-items-center flex-column last-div'>
                <h3 className='text-white text-center '>You don't have any courses </h3>
                <Button as={ Link } className="app-nav__btn" to="/">Enroll</Button>
            </div> }


        </Container>
    )
}
