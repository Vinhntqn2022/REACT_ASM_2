import React from "react";

function App(props) {
    const t = props.task
    return (
        <div key={t.id} className="d-flex justify-content-between my-3 px-5 align-items-center task">
            <div>
                <input type="radio" id="low" name="priority" value="low"/>
                <label className={t.priority} htmlFor="low">{t.name}</label>
            </div>
            <p className="text-danger my-auto">{t.deadline}</p>
            <button onClick={(e) => props.handleClick(e.target.value)} value={t.id} type="submit" className="btn btn-danger btn-sm">delete</button>
        </div>  
    );
}
export default App;