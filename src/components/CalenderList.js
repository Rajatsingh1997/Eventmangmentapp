import React,{useState} from 'react'
// import { Link } from "react-router-dom";
import "./Calender.css";

function CalenderList(props) {

    const [events, setEvents] = useState();
    const[filter,setFilter]=useState();
    
    const clndrList = (event, detail, city, fromdate, tilldate) => {
        console.log(clndrList);

        const newEvents = [...events, {
            eventtitle: event, detail: detail, city: city,
            fromdate: fromdate, tilldate: tilldate,id:Math.random(),status:false
         }]
        setEvents(newEvents);
        console.log(setEvents);


    }
    return (
        <div className="mainbox">
            <div className="secondbox">
                Calender List here!!!!!
            </div>
        </div>
    )
}

export default CalenderList;