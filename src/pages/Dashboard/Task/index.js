import React from "react";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { TodoActions } from "../../../redux/rootAction";

function App() {
    const tasksData = useSelector(state => state.TodoReducer.taskData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const editTask = (editId) => {
        dispatch(TodoActions.setEditTaskId(editId*1))
        navigate(`/dashboard/${editId}`)
    }
    const deleteTask = (deleteId) => {
        dispatch(TodoActions.deleteTaskId(deleteId*1))
      }
    return (
    <div className="col col-md-8 d-flex flex-column align-items-center task-list py-3">
        <h2>Task list</h2>
        {tasksData.map(task => {
            return (
                <div key={task.id} className="d-flex justify-content-between my-3 px-5 align-items-center task">
                    <div>
                        <input type="radio" id="low" name="priority" value="low"/>
                        <label className={task.priority} htmlFor="low">{task.name}</label>
                    </div>
                    <p className="text-danger my-auto">{task.deadline}</p>
                    <div>
                        <button onClick={(e) => deleteTask(e.target.value)} value={task.id} type="submit" className="btn btn-danger btn-sm mr-3">delete</button>
                        <button onClick={(e) => editTask(e.target.value)} value={task.id} type="submit" className="btn btn-info btn-sm">Edit</button>
                    </div>
                </div> 
            )
          })}
       
    </div> 
    );
}
export default App;