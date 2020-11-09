import React, { useState } from 'react'
import { Form, Button, Col } from "react-bootstrap";
import "./Eventdetailform.css";
import Navbr from "./Navbr";
// import { Link } from "react-router-dom";


export default function Eventdetailform(props) {

    const [event, setEvent] = useState([]);
    const [detail, setDetail] = useState([]);
    const [city, setCity] = useState([]);
    const [fromdate, setFromdate] = useState('');
    const [tilldate, setTilldate] = useState('');


    const onSubmit = (e) => {
        e.preventDefault()
        console.log(event)
        console.log(detail)
        console.log(city)
        console.log(fromdate)
        console.log(tilldate)
          
        // if (event =="") {
        //     console.log("enter event title" );
        //     alert("enter event title");
        //     e.preventDefault();
        // }
        // else if (detail =="") {
        //     alert("enter event details");
        //     e.preventDefault();
        // }
        // else if (city =="") {
        //     alert("enter event details");
        //     e.preventDefault();
        // }
        // else if (fromdate =="") {
        //     alert("enter event details");
        //     e.preventDefault();
        // }
        // else if (tilldate =="") {
        //     alert("enter event details");
        //     e.preventDefault();
        // }
        // else {
        //     props.clndrList(event, detail, city, fromdate, tilldate)
        //     setEvent('');
        //     setDetail('');
        //     setCity('');
        //     setFromdate('');
        //     setTilldate('');

        // }
    }



    return (
        <>
            <Navbr />
            <div className="formshows">

                <Form onSubmit={onSubmit}>


                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control placeholder="Enter event title"
                            value={event}
                            type="text"
                           
                            onChange={(e) => {setEvent(e.target.value) }} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Event Detail</Form.Label>
                        <Form.Control placeholder="Enter event detail" className="fix"

                           value={detail}
                            type="text"
                            onChange={(e) => {setDetail(e.target.value) }} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity"
                            type="city"
                            onChange={(e) => {setCity(e.target.value) }}>
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail"
                            onChange={(e) => {setFromdate(e.target.value) }}>
                            <Form.Label>From</Form.Label>
                            <Form.Control type="date" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword"

                            onChange={(e) => {setTilldate(e.target.value) }}>
                            <Form.Label>Till</Form.Label>
                            <Form.Control type="date" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>
                    {/* <Link to="/calender"> */}
                        <Button variant="success" 
                        className="rajat" 
                        disabled={event && detail ? false : true}
                        onClick={onSubmit}>
                        Book Event</Button>{' '}
                    {/* </Link> */}
                </Form>              
            </div>
        </>
    )
}