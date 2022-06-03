
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { TodoActions } from "../../../redux/rootAction";
import React, {useState} from "react";

function NewTask() { 
  const tasksData = useSelector(state => state.TodoReducer.taskData)
  const dispatch = useDispatch()
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
  const newTaskValue = {
      id: [...tasksData].length,
      name: name,
      priority: priority,
      deadline: startDate.toISOString().slice(0, 10)
  }
  const addTask = (newTaskValue) => {
    dispatch(TodoActions.setTasksData(newTaskValue))
  }
    return (
      <div className="col col-md-4 d-flex flex-column align-items-center task-list py-3">
        <h2>New Task</h2>
        <div className="d-flex flex-md-column">
           <div className="form-group">
              <label htmlFor="name">Name</label>
              <input onChange={(e) => getName(e.target.value)} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label>Deadline</label>
              <DatePicker 
                  selected={startDate} 
                  onChange={date => getDeadline(date)}
                  showTimeSelect
                  dateFormat="Pp" 
              />
            </div>
            <div onChange={(e) => getPriority(e.target.value)}>
              <h3>priority</h3>
              <input type="radio" id="high" name="priority" value="high"/>
              <label className="high" htmlFor="high">High</label><br/>
              <input type="radio" id="medium" name="priority" value="medium"/>
              <label className="medium" htmlFor="medium">Medium</label><br/>
              <input  type="radio" id="low" name="priority" value="low"/>
              <label className="low" htmlFor="low">Low</label>
            </div>
             <button onClick={() => addTask(newTaskValue)} type="submit" className="btn btn-primary mt-3" id="additem">Add Task</button>
          </div>
      </div>
    );
}
export default NewTask;