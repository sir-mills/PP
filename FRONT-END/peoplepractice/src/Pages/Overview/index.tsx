import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import LineChart from './LineChart';
import { Doughnut } from 'react-chartjs-2';

import "./styles/overview.scss";

const Overview = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [{
            labels: 'Sales of the Week',
            data: [6, 3, 9],
            backgroundColor: '#2563EB',
            borderColor: 'black',
            pointBorderColor: '#2563EB',
            fill: 'red',
            tension: 0.4

        }]
    };

    return (
        <Container>
            <div className='mr-4'>
                <h2 className='font-weoght-bolder'>Welcome Back</h2>
            </div>
            .
            <Row>
                <Col sm="12">
                    <Card className='mt-4 py-3'>
                        <CardBody>
                            <Row>
                                <Col md="4">
                                    <hgroup>
                                        <h5>Total Revenue</h5>
                                        <h3>$40,000</h3>
                                    </hgroup>
                                </Col>
                                <Col md="4" className='orderCol'>
                                    <h5>Orders</h5>
                                    <h3>40,000</h3>
                                </Col>
                                <Col md="4">
                                    <h5>Customers</h5>
                                    <h3>40</h3>
                                </Col>

                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row className='mt-5 charts'>
                <Col sm="12" md="7">
                    <Card>
                        <CardBody>
                            <LineChart />
                        </CardBody>
                    </Card>
                </Col>

                <Col sm="12" md="5">
                    <Card>
                        <CardBody>
                            <Doughnut data={data} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Overview