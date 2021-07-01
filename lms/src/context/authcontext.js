import React from "react";
import { useAlert } from 'react-alert';
import axios from 'axios';
import { useCookies } from 'react-cookie';
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = React.useState(null),
        alert = useAlert(),
        [cookies, ] = useCookies(['user']);

    React.useEffect(() => {
        
        if (cookies['user']) setUser(cookies['user']);
        else
        axios.get(global.config.URI_BE + '/admin/loggedin')
          .then( () => {})
          .catch(() => {})
      
  
    }, [alert, user, cookies])

    return <AuthContext.Provider value={[user, setUser]}>{children}</AuthContext.Provider>
} 