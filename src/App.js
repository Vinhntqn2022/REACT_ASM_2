import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { Routes, Route} from "react-router-dom"
import React from "react";

import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard";

import { AuthProvider } from "./Context"
import { ProtectedRoute } from "./routes/ProtectedRoute"
import {AuthRoute} from "./routes/AuthRoute"
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import UsenameAlert from "./components/annoucements/UsenameAlert";
import PasswordAlert from "./components/annoucements/PasswordAlert";
import SignUpSuccess from "./components/annoucements/SignUpSuccess";


function App() {
   return (
         <AuthProvider>
            <SignUpSuccess />
            <UsenameAlert />
            <PasswordAlert />
            <Navigation />
            <Routes>
              <Route index element={<Home />} />
              <Route path="signin" element={
                <AuthRoute>
                  <SignIn />
                </AuthRoute>
              }/>
               <Route path="signup" element={
                <AuthRoute>
                  <SignUp />
                </AuthRoute>
              }/>
              <Route path="dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </AuthProvider>
  )
  
}

export default App;
