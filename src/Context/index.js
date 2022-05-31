import React, {useState, useEffect} from "react"
import { useNavigate, useLocation } from "react-router-dom"

import useApi from "../hooks/sever"
import fakeAuth from "../hooks/fakeAuth"

const AuthContext = React.createContext(null)
const useAuth = () => React.useContext(AuthContext)
const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [token, setToken] = useState(null)
    const [showUsenameAlert, setShowUsenameAlert] = useState(false)
    const [showPasswordAlert, setShowPasswordAlert] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [userData, setUserData] = useState([
        {
            usename: "admin",
            password: "adminadmin"
        },
        {
            usename: "vinh",
            password: "vinhvinh"
        }
    ])
    const getTokenApi = useApi(() => fakeAuth())
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('token'));
        if (items) {
         setToken(items);
        }
        getTokenApi.request()
      }, []);
    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token])

    const handleLogin = (values) => {
      const corectUsername = userData.find(user => user.usename === values.usename)
      if(!corectUsername) {
        setShowUsenameAlert(true)
      } else if(corectUsername.password !== values.password) {
        setShowPasswordAlert(true)
      } else {      
        setToken(getTokenApi.data)  
        console.log(token)
        const origin = location.state?.from?.pathname || '/dashboard'
        navigate(origin)
      }
     
    }
    const handlecreateAcount =(values) => {
        setUserData([...userData, values])
        setShowSuccess(true)
        navigate("/signin")

    }
    const handleLogout = () => {
      setToken(null)
    }
    const handleSignUpShow = () => {
        navigate("/signup")
    }
    const handleSignInShow = () => {
        navigate("/signin")
    }
    const handleMessageShow = (value) => {
        setShowUsenameAlert(value)
    }
    const handlePasswordShow = (value) => {
        setShowPasswordAlert(value)
    }
    const handleShowSucess = (value) => {
        setShowSuccess(value)
    }
    const value = {
        token: token,
        onLogin: handleLogin,
        onLogout: handleLogout,
        showSignUp: handleSignUpShow,
        showSignIn: handleSignInShow,
        createAcount: handlecreateAcount,
        showUsenameAlert: showUsenameAlert,
        showPasswordAlert: showPasswordAlert,
        setShowMessage: handleMessageShow,
        handlePasswordShow: handlePasswordShow,
        showSuccess: showSuccess,
        setShowSucess: handleShowSucess

    }
    if (getTokenApi.loading) {
    return (<p>pages are loading</p>)
    } else if (getTokenApi.error) {
        return (<p>{getTokenApi.error}</p>)
    } else return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth }
