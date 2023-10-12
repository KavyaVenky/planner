import { useState } from "react";
import './firstPage.css';

function FirstPage() {
    let currenttime = "";
    currenttime = new Date().toDateString();
    const [date, setNewDate] = useState('');
    const [task, setTask] = useState('');
    const [time, setDiffTime] = useState(0.0);

    function obtainDate(event){
        // splitting the string format array
        const dateArray = event.target.value.split("-");
        console.log(dateArray)
        // create a new date with the separate values
        var newDate = new Date(dateArray[0], dateArray[1]-1, dateArray[2]);
        // set date in use state
        setNewDate(newDate.toDateString());
        // logging the created date and the date in the use state
        console.log(newDate.toDateString());
        console.log(date);
        // logging the time difference between the two dates
        console.log(Math.abs(newDate - new Date()) / 36e5);
        const difftime = Math.abs(newDate - new Date()) / 36e5;
        setDiffTime(Math.round(difftime));

    }

    function getTask(event){
        setTask(event.target.value);
    }

    return(
        <>
        <h1>Planner</h1>
        <div>
            <label>Enter date: </label> <input type="date" onChange={obtainDate} className="box"/>
            <label>Enter Task name: </label> <input type="text" onChange={getTask} className="box"/>
        </div>            

        {/* <p>{currenttime}</p> */}
        <div className="card">
            <p>Task name: {task}</p>
            <p>Date: {date}</p>
            <p>Time Difference: {time}</p>
        </div>
        </>
    );
}

export default FirstPage;