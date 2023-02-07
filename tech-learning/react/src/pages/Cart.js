import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../rtk/slices/CartSlice';
import Table from 'react-bootstrap/Table';
import Head from '../components/Head';

function Cart()
{
    const cart = useSelector( state => state.cart )
    const total = cart.reduce( ( acc, course ) =>
    {
        acc += course.price;
        return acc
    }, 0 )
    const dispatch = useDispatch()
    return (
        <Container className='cart pt-3'>
            <Head text="CART" />
            { cart.length ? <div className='d-flex text-white position-relative justify-content-between align-items-center flex-column flex-lg-row'>
                <Table striped bordered hover variant="dark" className='w-75 my-4
                '>
                    <thead className='text-center'>
                        <tr>
                            <th>Id</th>
                            <th>Course Name</th>
                            <th>Course picture</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody className="g-4 ">
                        { cart.map( ( course, index ) =>
                        (
                            <tr key={ course.id }>
                                <td >{ index + 1 }</td>
                                <td>{ course.title }</td>
                                <td>
                                    <img src={ course.src } alt='img' className='img-fluid' />
                                </td>
                                <td>{ course.price }</td>
                                <td className='cart py-5'>
                                    <button onClick={ () => dispatch( removeFromCart( course ) ) } >remove</button>
                                </td>
                            </tr>
                        ) ) }
                    </ tbody>
                </Table>
                <div className='w-25 text-center d-flex flex-column align-items-center cart mb-3'>
                    <h2>checkout</h2>
                    <p>total price is { total } $</p>
                    <Button as={ Link } className="app-nav__btn m-auto" to="/checkout">Buy</Button>
                </div>
            </div> : <div className='d-flex justify-content-center align-items-center flex-column last-div'>
                <h3 className='text-white text-center '>You don't have any courses to enroll </h3>
                <Button as={ Link } className="app-nav__btn" to="/">Enroll</Button>
            </div>
            }
        </Container>
    );
}

export default Cart;
