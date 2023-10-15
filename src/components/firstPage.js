import { useState } from "react";
import './firstPage.css';
import {FaTrash} from "react-icons/fa"

function FirstPage() {
    let currenttime = "";
    currenttime = new Date().toDateString();
    const [date, setNewDate] = useState('');
    const [task, setTask] = useState('');
    const [count, setCount] = useState(0);

    const [taskArray, setTaskArray] = useState([]);

    function obtainDate(event){
        setNewDate(event.target.value);
    }

    function getTask(event){
        setTask(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        setCount(count+1);
        const data = {count, date, task};
        if (date && task){
            setTaskArray((t) => [...taskArray, data]);
        }
        setNewDate('');
        setTask('');
        console.log("task array elements", taskArray);
    }

    function handleDelete(index){
        setTaskArray(ls => {
            return ls.filter(l => l.count !== index)
        });
    }

    return(
        <>
        <h1>Planner</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-div">
                <label>Enter date: </label> <input type="date" value={date} onChange={obtainDate} className="box"/>
                <label>Enter Task name: </label> <input type="text" value={task}onChange={getTask} className="box"/>
                <button className="btn">Submit</button>
            </div>            
        </form>
        
        {taskArray.map((t) => {
            if(t.task && t.date){
                return(
                    <div key={t.count} className="card">   
                        <div className="card-header">
                            <button style={{backgroundColor:"chocolate", border:"none"}} onClick={() => handleDelete(t.count)}><FaTrash className="delete" size={22}/></button>
                        </div>                 
                        <p>Task name: {t.task}</p>
                        <p>Date: {t.date}</p>
                    </div>
                );
            }
        }
        )}
        
        
        </>
    );
}

export default FirstPage;