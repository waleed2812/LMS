import React from "react";
import { useAlert } from 'react-alert';
import axios from 'axios';
import { useCookies } from 'react-cookie';
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUserOnly] = React.useState(null),
        alert = useAlert(),
        [cookies, setCookies, removeCookie] = useCookies(['user']);

    const setUser = (user) => {
        setUserOnly(user);
        setCookies("user", user)
    }

    const logout = () => {
        setUserOnly(null);
        removeCookie("user");
        axios.delete(global.config.URI_BE + '/logout', {withCredentials: true})
            .then( res => {
                console.log(res);
				alert.show("Logged Out", {type: "success"})
            })
            .catch( err => {
                console.log(err);
				alert.show("Not Logged Out", {type: "error"})
            })
    }

    React.useEffect(() => {
        
        if (cookies['user']) setUser(cookies['user']);
        else
        axios.get(global.config.URI_BE + '/user/current')
          .then( () => {alert.show("Logged In", {type: "success"})})
          .catch(() => {})
      
  
    }, [])

    return <AuthContext.Provider value={[user, setUser, logout]}>{children}</AuthContext.Provider>
} 