import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap'
import { FaCartArrowDown, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { useDispatch } from 'react-redux';
import { addToCart } from '../rtk/slices/CartSlice';
export default function ContentCard( props )
{
    const courses = props.data;
    const dispatch = useDispatch()
    return (
        <>
            {
                courses.map( ( course ) =>
                (
                    <Col key={ course.id } className="d-flex justify-content-center card-column">
                        < Card className='cours-card d-flex justify-content-center align-items-center py-3'>
                            <span className='count'>{ course.id }</span>
                            <Card.Img variant="top" src={ course.src } alt='img' />
                            <Card.Body className='w-100 d-flex align-items-start flex-column'>
                                <Card.Title className='fw-bold w-100 fs-3 text-start'>{ course.title }</Card.Title>
                                <Card.Text className='w-50 d-flex justify-content-between icon-container'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </Card.Text>
                                <Card.Text className='m-0 w-100 text-start'>
                                    { course.disc }
                                </Card.Text>
                                <Card.Text >
                                    Start Your Journey Now
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className='d-flex justify-content-between align-items-center w-100'>
                                <button onClick={ () => dispatch( addToCart( course ) ) }>Enroll<FaCartArrowDown className='ps-1' /></button>
                                <p className='m-0 card-price_discount fs-6'>{ course.price - 10 } $</p>
                                <p className='m-0 card-price fw-bold fs-5'>{ course.price } $</p>
                            </Card.Body>
                        </Card >
                    </Col>
                ) )
            }
        </>



    );
}