import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "../../redux/rootAction";

export default function SignOut() {
    const token = useSelector(state => state.AuthReducer.token)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(AuthActions.setToken(null))
      }
    return (
        <>
            { token && (
                <button className="btn btn-primary mt-5 mr-5 float-right" type="button" onClick={handleLogout}>
                Sign Out
            </button>
            )}
        </>
    )
}