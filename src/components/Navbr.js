import React from 'react'
import "./Navbr.css";
import Forms from "./Forms";
import { Navbar } from "react-bootstrap";

export default function Navbr() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="box0">
                <Navbar.Brand className="box">Event Managment Application </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                <Forms/>
            </Navbar>
        </div>
    )
}