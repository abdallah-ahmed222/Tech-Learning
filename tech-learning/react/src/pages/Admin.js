import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Head from '../components/Head';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { toast } from "react-toastify";


function MyVerticallyCenteredModal( props )
{
    const courses = props.data;

    return (
        <Modal
            { ...props }
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='rounded'
        >
            <Modal.Body>
                <h4 className='text-center text-white p-0 m-0 fw-bold'>User Enrroled Courses</h4>
                <Row xs={ 1 } md={ 2 } lg={ 3 } className="g-4 py-4">

                    { courses.map( ( course ) =>
                    (
                        <Col key={ course.id } className="d-flex justify-content-center">
                            < Card className='cours-card d-flex justify-content-center align-items-center py-3'>
                                <Card.Img variant="top" src={ course.src } alt='img' />
                                <Card.Body className='w-100 d-flex align-items-center flex-column'>
                                    <p className='fw-bold w-100 '>{ course.title }</p>
                                </Card.Body>
                            </Card >
                        </Col>
                    ) ) }
                </Row>
            </Modal.Body>
            <div className='p-2'>
                <Button className='app-nav__btn' onClick={ props.onHide }>Close</Button>
            </div>
        </Modal>
    );
}

// https://www.youtube.com/embed/LdJbP0NbFRw
function Admin()
{
    const [ modalShow, setModalShow ] = useState( false );
    const [ data, setData ] = useState( [] );
    const [ courses, setCourses ] = useState( [] );
    const [ all, setAll ] = useState( [] )
    const [ title, setTitle ] = useState( "" )
    const [ disc, setDisc ] = useState( "" )
    const [ link, setLink ] = useState( "" )
    const [ price, setPrice ] = useState( "" )
    const [ src, setSrc ] = useState( "" )
    const [ val, swtVal ] = useState( 1 )

    async function ImgfileReader( img )
    {
        setSrc( await toBase64( img.target.files[ 0 ] ) );

    }
    const toBase64 = file => new Promise( ( resolve, reject ) =>
    {
        const reader = new FileReader();
        reader.readAsDataURL( file );
        reader.onload = () => resolve( reader.result );
        reader.onerror = error => reject( error );
    } );
    useEffect( () =>
    {
        axios.get( "https://tech-api-iqvz.onrender.com/maincards" ).then( res => setAll( res.data ) )

    }, [ val ] )
    useEffect( () =>
    {
        axios.get( "http://localhost:7000/users" ).then( res => setData( res.data ) )
    }, [ modalShow ] )
    const users = data;

    function handleDelete( courseId )
    {
        axios.delete( `https://tech-api-iqvz.onrender.com/maincards/${ courseId }` )
    }
    const body = {
        "title": title,
        "disc": disc,
        "link": link,
        "price": price,
        "src": src
    }
    const postCourse = ( e ) =>
    {
        e.preventDefault()
        axios.post( "http://localhost:7000/maincards", body ).then( () =>
        {
            toast.success( "course add sucssefuly" )
            swtVal( -val )
        }

        ).catch( () => toast.error( "course add faild" ) )
    }
    return (
        <Container className='cart rounded py-2'>
            <Head text="Users" />
            <Table striped bordered hover variant="dark" className='my-4 rounded'>
                <thead className='text-center'>
                    <tr>
                        <th>Id</th>
                        <th>User Name</th>
                        <th>User Mail</th>
                        <th>Position OR Courses</th>
                    </tr>
                </thead>
                <tbody className="g-4 ">
                    { users.map( ( user ) => (
                        <tr key={ user.id }>
                            <td >{ user.id }</td>
                            <td>{ user.firstname }</td>
                            <td>
                                { user.email }
                            </td>
                            <td>
                                {
                                    user.position === "admin" ? user.position
                                        : <>
                                            <Button className='mt-3 m-auto app-nav__btn' onClick={ () =>
                                            {
                                                setModalShow( true )
                                                setCourses( user.courses )
                                            } }>
                                                Coueses
                                            </Button>

                                            <MyVerticallyCenteredModal

                                                data={ courses }
                                                show={ modalShow }
                                                onHide={ () => setModalShow( false ) }
                                            />
                                        </>
                                }
                            </td>
                        </tr>
                    ) ) }
                </ tbody>
            </Table>
            <Head text="Payments History" />
            <Table striped bordered hover variant="dark" className='my-4 rounded'>
                <thead className='text-center'>
                    <tr>
                        <th>Id</th>
                        <th>User Mail</th>
                        <th>Payments History</th>
                    </tr>
                </thead>
                <tbody className="g-4 ">
                    { users.map( ( user ) => (
                        <tr key={ user.id }>
                            <td >{ user.id }</td>
                            <td>
                                { user.email }
                            </td>
                            <td>
                                {
                                    user.position === "admin" ? user.position
                                        : <div>
                                            <p>{ user.date }</p>
                                        </div>
                                }
                            </td>
                        </tr>
                    ) ) }
                </ tbody>
            </Table>
            <Head text="Delete Courses" />
            <Container>
                <Row xs={ 1 } md={ 2 } lg={ 3 } className="g-4 py-4">
                    { all.map( ( course ) =>
                    (
                        <Col key={ course.id } className="d-flex justify-content-center">
                            < Card className='cours-card d-flex justify-content-center align-items-center py-3'>
                                <Card.Img variant="top" src={ course.src } alt='img' />
                                <Card.Body className='w-100 d-flex align-items-center flex-column'>
                                    <p className='fw-bold w-100 '>{ course.title }</p>
                                </Card.Body>
                                <Button onClick={ () =>
                                {
                                    handleDelete( course.id )
                                    swtVal( -val )
                                } }>delete</Button>
                            </Card >
                        </Col>
                    ) ) }
                </Row>
            </Container>
            <Head text="Add Course" />
            <Container className='text-white d-flex align-items-center justify-content-center mb-3'>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control type="text" value={ title } onChange={ ( e ) => setTitle( e.target.value ) } required placeholder="Enter Course Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDisc">
                        <Form.Label>Course disc</Form.Label>
                        <Form.Control type="text" value={ disc } onChange={ ( e ) => setDisc( e.target.value ) } required placeholder="Enter Course disc" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLink">
                        <Form.Label>Course Link</Form.Label>
                        <Form.Control type="text" value={ link } onChange={ ( e ) => setLink( e.target.value ) } required placeholder="Enter Course Link" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Course price</Form.Label>
                        <Form.Control type="text" value={ price } onChange={ ( e ) => setPrice( e.target.value ) } required placeholder="Enter Course price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSrc">
                        <Form.Label>Course Img Src</Form.Label>
                        <Form.Control type="file" value="" onChange={ ( e ) => ImgfileReader( e ) } required placeholder="Enter Course img src" />
                    </Form.Group>
                    <Button variant="primary" className='m-auto' type="submit" onClick={ postCourse }>
                        Submit
                    </Button>
                </Form>
            </Container>

        </Container>
    );
}

export default Admin;
