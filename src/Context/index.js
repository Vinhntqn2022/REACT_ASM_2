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
    console.log(userData)
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('token'));
        if (items) {
         setToken(items);
        }
      }, []);
    const getTokenApi = useApi(() => fakeAuth())
    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token])

    const handleLogin = async (values) => {
      const corectUsername = userData.find(user => user.usename === values.usename)
      if(!corectUsername) {
          alert("incorrect usename")
      } else if(corectUsername.password !== values.password) {
          alert("incorrect password")
      } else {
        await getTokenApi.request()
        console.log(getTokenApi.data)
        setToken(getTokenApi.data)  
        const origin = location.state?.from?.pathname || '/dashboard'
        navigate(origin)
      }
     
    }
    const handlecreateAcount =(values) => {
        setUserData([...userData, values])
    }
    const handleLogout = () => {
      setToken(null)
    }
    const handleshowSignUp = () => {
        navigate("/signup")
    }
    const handlecancelSetup = () => {
        navigate("/signin")
    }
    const value = {
        token: token,
        onLogin: handleLogin,
        onLogout: handleLogout,
        showSignUp: handleshowSignUp,
        cancelSetup: handlecancelSetup,
        createAcount: handlecreateAcount
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
