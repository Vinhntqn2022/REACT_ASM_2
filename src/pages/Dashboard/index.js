import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../Dashboard/Dashboard.css";

import NewTask from '../../components/NewTask'
import Task from '../../components/Task'
import {useAuth} from "../../Context"


export default function Dashboard () {

const {token, onLogout} = useAuth()        
const initialData = [
    {
      id: 0,
      name: "Assignment",
      priority: 'high',
      deadline: new Date().toISOString().slice(0, 10)
    },
    {
      id: 1,
      name: "Washing cloths",
      priority: 'high',
      deadline: new Date().toISOString().slice(0, 10)
    },
  ]
  const [tasksData, setTasksData] = useState(initialData)
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("")
  const [priority, setPriority] = useState("");

  const getDeadline = (date) => {
          setStartDate(date)
  }
  const getName = (newName) => {
    setName(newName)
  }
  const getPriority = (newPriority) => {
    setPriority(newPriority)
  }
  
  const addTask = () => {
    setTasksData([...tasksData, {id: [...tasksData].length, name: name, priority: priority, deadline: startDate.toISOString().slice(0, 10)}])
  }
  const deleteTask = (deleteId) => {
    setTasksData([...tasksData].filter(el => el.id !== deleteId * 1))
  }
  return (
    <>
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-4 d-flex flex-column align-items-center task-list">
            <h2>New Task</h2>
            <NewTask 
              date = {startDate}
              getDate={getDeadline}
              name={getName}
              priority={getPriority}
              handleClick={addTask} 
            />
          </div>
          <div className="col col-md-8 d-flex flex-column align-items-center task-list">
            <h2>Task list</h2>
            {tasksData.map(el => {
              return (
                <Task task ={el} handleClick = {deleteTask}/>
              )
            })}
          </div>
        </div>
        {token && (
           <button className="btn btn-primary mt-5 mr-5 float-right" type="button" onClick={onLogout}>
           Sign Out
         </button>
         )}
      </div>
    </div>
    </>
  );
  
}