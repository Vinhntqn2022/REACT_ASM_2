import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoActions } from "../../../redux/rootAction";
import { useNavigate } from "react-router-dom";
import { AlertActions } from "../../../redux/rootAction";

import "./EditTask.css"

export default function EditTask() {
  const editTaskId = useSelector(state => state.TodoReducer.editTaskId)
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState(editTaskId?.name)
  const [priority, setPriority] = useState(editTaskId?.priority);
  const navigate = useNavigate()
   
  const getDeadline = (date) => {
          setStartDate(date)
  }
  const getName = (newName) => {
    setName(newName)
  }
  const getPriority = (newPriority) => {
    setPriority(newPriority)
  }
  const newTaskValue = {
      id: editTaskId.id,
      name: name,
      priority: priority,
      deadline: startDate.toISOString().slice(0, 10)
  }
  const editTask = (newTaskValue) => {
    dispatch(TodoActions.editTaskId(newTaskValue))
    dispatch(AlertActions.setSignUpSuccess(true))
    navigate("/dashboard")
  }
    return (
        <div className="col col-md-4 d-flex flex-column align-items-center edit-task my-5 p-3">
        <h2>Edit Task</h2>
        <div className="d-flex flex-md-column">
           <div className="form-group">
              <label htmlFor="name">Name</label>
              <input onChange={(e) => getName(e.target.value)} type="text" className="form-control" id="name" aria-describedby="emailHelp" value={name} />
            </div>
            <div className="form-group">
              <label>Old deadline: {editTaskId.deadline}</label>
              <DatePicker 
                  selected={startDate} 
                  onChange={date => getDeadline(date)}
                  showTimeSelect
                  dateFormat="Pp" 
              />
            </div>
            <div onChange={(e) => getPriority(e.target.value)}>
              <h3>Old priority: {priority}</h3>
              <input type="radio" id="high" name="priority" value="high"/>
              <label className="high" htmlFor="high">High</label><br/>
              <input type="radio" id="medium" name="priority" value="medium"/>
              <label className="medium" htmlFor="medium">Medium</label><br/>
              <input  type="radio" id="low" name="priority" value="low"/>
              <label className="low" htmlFor="low">Low</label>
            </div>
             <button onClick={() => editTask(newTaskValue)} type="submit" className="btn btn-primary mt-3" id="additem">Edit Task</button>
          </div>
      </div>
    )
}