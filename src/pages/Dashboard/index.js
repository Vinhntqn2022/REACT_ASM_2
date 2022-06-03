import "./Dashboard.css";
import NewTask from './NewTask'
import Task from './Task'
import SignOut from '../../components/SignOutButton'

export default function Dashboard () {       
   
  return (
    <div className="container-fluid">
      <div className="row py-3">
          <NewTask />
          <Task/>
      </div>
      <SignOut />
  </div> 
  );
  
}