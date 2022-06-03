import { Alert } from 'react-bootstrap'
import './Alert.css'
import { useSelector, useDispatch } from 'react-redux'
import { AlertActions } from '../../../redux/rootAction'


 const UsenameAlert = () => {
     const showUsenameAlert = useSelector(state => state.AlertReducer.wrongUsernameAlert)
     const dispatch = useDispatch();
    return (
        <div className="username-alert">
            <Alert variant="success" show={showUsenameAlert} >
                 <button className="close" onClick={() => dispatch(AlertActions.setWrongUsernameAlert(false))}>close</button>
                <Alert.Heading>Hey, nice to see you</Alert.Heading> 
                <p>Wrong username </p>
                <hr />
                <p className="mb-0">Please enter correct username</p>
            </Alert>
        </div>
    )
}

export default  UsenameAlert
