//page to diplay calender
import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const calender=()=>{
    const localizer = momentLocalizer(moment);
    const myEventsList = [
        {
        'title': 'All Day Event very long title',
        'allDay': true,
        'start': new Date(2021, 3, 0),
        'end': new Date(2021, 3, 1)
        },
        {
        'title': 'Long Event',
        'start': new Date(2021, 3, 7),
        'end': new Date(2021, 3, 10)
        },
    
        {
        'title': 'DTS STARTS',
        'start': new Date(2021, 2, 13, 0, 0, 0),
        'end': new Date(2021, 2, 20, 0, 0, 0)
        },
    
        {
        'title': 'DTS ENDS',
        'start': new Date(2021, 10, 6, 0, 0, 0),
        'end': new Date(2021, 10, 13, 0, 0, 0)
        },
    
        {
        'title': 'Some Event',
        'start': new Date(2021, 3, 9, 0, 0, 0),
        'end': new Date(2021, 3, 9, 0, 0, 0)
        },
        {
        'title': 'Conference',
        'start': new Date(2021, 3, 11),
        'end': new Date(2021, 3, 13),
        desc: 'Big conference for important people'
        },
        {
        'title': 'Meeting',
        'start': new Date(2021, 3, 12, 10, 30, 0, 0),
        'end': new Date(2021, 3, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting'
        },
        {
        'title': 'Lunch',
        'start': new Date(2021, 3, 12, 12, 0, 0, 0),
        'end': new Date(2021, 3, 12, 13, 0, 0, 0),
        desc: 'Power lunch'
        },
        {
        'title': 'Meeting',
        'start': new Date(2021, 3, 12, 14, 0, 0, 0),
        'end': new Date(2021, 3, 12, 15, 0, 0, 0)
        },
        {
        'title': 'Happy Hour',
        'start': new Date(2021, 3, 12, 17, 0, 0, 0),
        'end': new Date(2021, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day'
        },
    ]
    return(
        <div className="animated fadeIn">
        <Row>
            <Col>
            <Card>
                <CardHeader>
                <i className="fa fa-align-justify"></i> Calender <small className="text-muted">example</small>
                </CardHeader>
                <CardBody>
                    
                </CardBody>
            </Card>
            </Col>
        </Row>
        </div>
    )

}