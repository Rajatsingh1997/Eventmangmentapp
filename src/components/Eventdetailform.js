import React, { useState, useEffect } from "react";
import { Form, Button, Col, Table, Modal } from "react-bootstrap";
import "./Eventdetailform.css";
import Navbr from "./Navbr";
import Srch from "./Srch";
const MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCfMs0nYWjYJPJSF_-obS1biNCEwL2_Pvw&libraries=places`;

export default function Eventdetailform(props) {
  const [hide, setHide] = useState(true);
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [query, setQuery] = useState("");
  const [duplicateCity, setDuplicateCity] = useState(false);
  const [formstate, setformState] = useState({
    event: "",
    detail: "",
    city: "",
    fromdate: "",
    tilldate: "",
    id:'',
  });

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
      const newData = data ? [...data] : [];
      const newFormData={
        ...formstate,id:Math.random()
      }
      newData.push(newFormData);
      setData(newData);
      // console.log(data.filter(value=>value.id===formstate.id),'ddddddddddddddddddddddddddddddddd')
      console.log(data, "ddddddddddddddddddd");
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

  useEffect(() => {
    if (data?.length > 0) {
      console.log(data, "YYYYYYY");
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);

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
    setQuery("");
    setHide(!hide);
  };

  // For edit event

  const handleEdit = (val) => {
    setEdit(true);
    handleHide();
    setformState(val);
  };
  // data[data.length - 1];

  const onEdit = () => {
    console.log(data,'JJJJJJJJ',formstate)

    const newData = data?.map((val) => {
      if (val.id === formstate.id) {
        let rajat = {
          ...formstate,
        };
        return rajat;
      } else {
        return val;
      }
    });
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
    setEdit(false);
    setHide(false);
  };

  return (
    <>
      {edit ? <Navbr /> : <Navbr />}
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
                          <button onClick={() => handleEdit(val)}>Edit</button>
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
              <Srch setQuery={setQuery} query={query} />
            </Form.Row>{" "}
            <br />
            {edit ? (
              <Button variant="success" className="rajat" onClick={onEdit}>
                Update Event
              </Button>
            ) : (
              <Button variant="success" className="rajat" onClick={onSubmit}>
                Book Event
              </Button>
            )}
          </Form>
        </div>
      )}
    </>
  );
}
