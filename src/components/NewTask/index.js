
import DatePicker from "react-datepicker";

function App(props) { 
    return (
        <div className="d-flex flex-md-column">
           <div className="form-group">
              <label htmlFor="name">Name</label>
              <input onChange={(e) => props.name(e.target.value)} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label>Deadline</label>
              <DatePicker 
                  selected={props.date} 
                  onChange={date => props.getDate(date)}
                  showTimeSelect
                  dateFormat="Pp" 
              />
            </div>
            <div onChange={(e) => props.priority(e.target.value)}>
              <h3>priority</h3>
              <input type="radio" id="high" name="priority" value="high"/>
              <label className="high" htmlFor="high">High</label><br/>
              <input type="radio" id="medium" name="priority" value="medium"/>
              <label className="medium" htmlFor="medium">Medium</label><br/>
              <input  type="radio" id="low" name="priority" value="low"/>
              <label className="low" htmlFor="low">Low</label>
            </div>
             <button onClick={props.handleClick} type="submit" className="btn btn-primary mt-3" id="additem">Add Task</button>
          </div>
    );
}
export default App;