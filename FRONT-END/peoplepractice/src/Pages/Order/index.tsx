import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import "./styles/order.scss";

const Order = () => {
    return (
        <Container className='d-flex flex-column justify-content-center'>
            <h2>Place An Order Here</h2>
            <form action="" className='orderForm'>
                <div className='my-2'>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Name*'
                        className=' pb-3'
                    />
                    <input
                        id='productName'
                        name='productName'
                        type='text'
                        placeholder='Product Name*'
                        className=' pb-3'
                    />
                     <input
                        id='productCategory'
                        name='productCategory'
                        type='dropdown'
                        placeholder='Product Category*'
                        className=' pb-3'
                    />
                     <input
                        id='price'
                        name='price'
                        type='number'
                        placeholder='Price*'
                        className=' pb-3'
                    />
                     <input
                        id='orderDate'
                        name='orderDate'
                        type='date'
                        placeholder='Order Date*'
                        className=' pb-3'
                    />
                </div>
                <button type='submit'
                className='btn btn-primary px-5 font-weight-bold'
                >Place Order</button>
            </form>
        </Container>
    )
}

export default Order