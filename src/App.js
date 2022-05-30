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


function App() {
   return (
         <AuthProvider>
            <Routes>
              <Route index element={<SignIn />} />
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
            </Routes>
          </AuthProvider>
  )
  
}

export default App;
