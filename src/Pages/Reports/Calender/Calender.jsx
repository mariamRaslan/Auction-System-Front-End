import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from './../../../Axios';

const CalendarPage = () => {
  const localizer = momentLocalizer(moment);
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/auctions');
        setAuctions(result.data.data);
        console.log(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const GetFullYear = (date) => {
    return new Date(date).getFullYear();
  };

  const GetMonth = (date) => {
    return new Date(date).getMonth();
  };

  const GetDay = (date) => {
    return new Date(date).getDate();
  };

  const GetHours = (date) => {
    return new Date(date).getHours();
  };

  const GetMinutes = (date) => {
    return new Date(date).getMinutes();
  };

  const GetSeconds = (date) => {
    return new Date(date).getSeconds();
  };

  const myEventsList = auctions.length > 0
    ? auctions.map((auction) => ({
        title: auction.name,
        start: new Date(
          GetFullYear(auction.start_date),
          GetMonth(auction.start_date) - 1, // Adjust month value to be zero-based
          GetDay(auction.start_date),
          GetHours(auction.start_date),
          GetMinutes(auction.start_date),
          GetSeconds(auction.start_date)
        ),
        end: new Date(
          GetFullYear(auction.end_date),
          GetMonth(auction.end_date) - 1, // Adjust month value to be zero-based
          GetDay(auction.end_date),
          GetHours(auction.end_date),
          GetMinutes(auction.end_date),
          GetSeconds(auction.end_date)
        ),
        allDay: false, // Adjust based on your requirements
      }))
    : [];

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Calendar{' '}
              <small className="text-muted">example</small>
            </CardHeader>
            <CardBody>
              <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 700 }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CalendarPage;
