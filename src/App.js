import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { Routes, Route } from "react-router-dom"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard";

import { AuthActions } from "./redux/rootAction";
import { ProtectedRoute } from "./routes/ProtectedRoute"
import { AuthRoute } from "./routes/AuthRoute"
import NotFound from "./pages/NotFound";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import EditTask from "./pages/Dashboard/EditTask";
import SignUpFail from "./components/annoucements/SignUpFail";
import SignUpSuccess from "./components/annoucements/SignUpSuccess";
import PasswordAlert from "./components/annoucements/PasswordAlert";
import UsenameAlert from "./components/annoucements/UsenameAlert";

function App() {
    const editTaskId = useSelector(state => state.TodoReducer.editTaskId)
    const token = useSelector(state => state.AuthReducer.token)
    
    const dispatch = useDispatch()
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('token'));
        if (items) {
         dispatch(AuthActions.setToken(items));
        }
      }, []);
    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token])
      
   return (
     <>
      <SignUpFail />
      <SignUpSuccess />
      <PasswordAlert />
      <UsenameAlert />
      <Navigation />
      <Routes>
        <Route path="/" element={
          <AuthRoute >
            <Home />
          </AuthRoute>
      } />     
        <Route path="signin" element={
          <AuthRoute >
            <SignIn />
          </AuthRoute>
        }/>
          <Route path="signup" element={
          <AuthRoute >
            <SignUp />
          </AuthRoute>
        }/>
        <Route path="dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }/>
        <Route path={`dashboard/${editTaskId?.id}`} element={
            <EditTask />
        }/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
     </>
  )
}
export default App;
