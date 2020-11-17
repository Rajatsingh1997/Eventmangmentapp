import React, { useState, useEffect } from "react";
import { Form, Button, Col, Table, Modal } from "react-bootstrap";
import "./Eventdetailform.css";
import Navbr from "./Navbr";
import Srch from "./Srch";
const MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCfMs0nYWjYJPJSF_-obS1biNCEwL2_Pvw&libraries=places`;

export default function Eventdetailform(props) {
  const [hide, setHide] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [duplicateCity, setDuplicateCity] = useState(false);
  const [formstate, setformState] = useState({
    event: "",
    detail: "",
    city: "",
    fromdate: "",
    tilldate: "",
    id: Math.random(),
  });

  // useEffect(() => {
  //   var localData =  useEffect(() => {
  //     if (data && data.length > 0) {
  //       localStorage.setItem("data", JSON.stringify(data||[]));
  //      const localData = localStorage.getItem("data");
  //      setData(JSON.parse(localData));
  //      setData(JSON.parse(localData));
  //     }
  //   }, [data]);localStorage.getItem("data");
  //   setData(JSON.parse(localData));
  // }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (formstate.event === "") {
      alert("Enter event Title");
    } else if (formstate.detail === "") {
      alert("Enter event details");
    } else if (formstate.fromdate === "") {
      alert("enter starting date");
    } else if (formstate.tilldate === "") {
      alert("Enter end date");
    } else if (formstate.city === "") {
      alert("Enter city name");
    } else {
     
      const newData =data?[...data]:[]
       newData.push(formstate);
      setData(newData);
      setHide(!hide);
      setQuery("");
    }
  };


  useEffect(() => {
    if (data) {
      const localData = localStorage.getItem("data");
      setData(JSON.parse(localData));
    }
  }, []);

  useEffect(()=>{
    if(data?.length>0){
      console.log(data,'YYYYYYY')
      localStorage.setItem('data', JSON.stringify(data));
    }
  },[data])

  useEffect(() => {
    if (query) {
      setformState({ ...formstate, city: query });
    }
  }, [query]);

  const handleHide = () => {
    setformState({
      ...formstate,
      event: "",
      detail: "",
      city: "",
      fromdate: "",
      tilldate: "",
    });
    setHide(!hide);
  };

  // useEffect(() => {
  //   if (duplicateCity) {
  //     alert(`${formstate.city} already booked  for event`);
  //   } else {
  //     setDuplicateCity(false);
  //   }
  // }, [duplicateCity]);

  // const checkInput = (e) => {
  //   setformState({ ...formstate, city: e.target.value });
  //   data.map((val) => {
  //     console.log(val.city, "HHHHH", e.target.value);
  //     if (val.city === e.target.value) {
  //       alert("This city is alredy booked");
  //       setDuplicateCity(true);
  //     }
  //   });
  // };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // const handleDateChange = (e) => {
  //   setformState({ ...formstate, fromdate: e.target.value });
  //   console.log(e.target.value, "JJJJJJJ", data);
  //   if(data?.length>0){
  //   data.map(dates=>{
  //   console.log(JSON.stringify(dates.fromdate)===JSON.stringify(e.target.value),'UUUUUUU')
  //   })
  //   }
  //   else{
  //     setformState({ ...formstate, fromdate: e.target.value });
  //   }
  // if (data.length > 0) {
  //   data.map((val) => {
  //     if (val.fromdate === e.target.value) {
  //       alert("Invalid date");
  //     } else {
  //       setformState({ ...formstate, fromdate: "" });
  //     }
  //   });
  // } else {
  //   setformState({ ...formstate, fromdate: e.target.value });
  // }
  // };

  // For edit event

  const editEvent = (id) => {
    alert("change the details");
  };
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>already booked this date</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Navbr />
      {!hide && (
        <>
          <div className="list">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Event title</th>
                  <th>Event detail</th>
                  <th>Starting date</th>
                  <th>End date</th>
                  <th>City</th>
                  <th></th>
                </tr>
              </thead>
              {data?.map((val) => {
                return (
                  <>
                    <tbody>
                      <tr>
                        <td>{val?.event}</td>
                        <td>{val?.detail}</td>
                        <td>{val?.fromdate}</td>
                        <td>{val?.tilldate}</td>
                        <td>{val?.city}</td>
                        <td>
                          <button onClick={() => editEvent(formstate.id)}>
                            Edit
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </Table>

            <button className="backbtn" onClick={handleHide}>
              Go Back
            </button>
          </div>
        </>
      )}
      {hide && (
        <div className="formshows">
          <Form noValidate>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                placeholder="Enter event title"
                className="fix"
                value={formstate.event}
                type="text"
                onChange={(e) => {
                  setformState({ ...formstate, event: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Event Detail</Form.Label>
              <Form.Control
                placeholder="Enter event detail"
                className="fix"
                value={formstate.detail}
                type="text"
                onChange={(e) => {
                  setformState({ ...formstate, detail: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>From date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formstate.fromdate}
                  onChange={(e) =>
                    setformState({ ...formstate, fromdate: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Till date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formstate.tilldate}
                  onChange={(e) => {
                    setformState({ ...formstate, tilldate: e.target.value });
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              {/* <Form.Group
                as={Col}
                controlId="formGridCity"
                type="text"
                value={formstate.city}
                onChange={checkInput}
              >
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group> */}
              <Srch setQuery={setQuery} query={query} />
            </Form.Row>{" "}
            <br />
            <Button variant="success" className="rajat" onClick={onSubmit}>
              Book Event
            </Button>{" "}
            <Button className="View" onclick={() => setHide(!hide)}>
              Show Table
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}
