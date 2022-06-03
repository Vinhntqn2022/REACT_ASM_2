
import { Alert } from 'react-bootstrap'
import "./SignUpFail.css"
import { useSelector, useDispatch } from "react-redux";
import { AlertActions } from "../../../redux/rootAction";


 const SignUpFail = () => {
    const showSignUpFail = useSelector(state => state.AlertReducer.signUpFail)
    const dispatch = useDispatch()
    return (
        <div className="singupfail-alert">
            <Alert variant="success" show={showSignUpFail} >
                 <button className="singupfail-alert__close" onClick={() => dispatch(AlertActions.setSignUpFail(false))}>close</button>
                <Alert.Heading>Hey, nice to see you</Alert.Heading> 
                <p>Sorry! </p>
                <hr />
                <p className="mb-0">Your username was taken by other users</p>
            </Alert>
        </div>
    )
}

export default SignUpFail
