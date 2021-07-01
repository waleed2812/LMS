// Defaults
import React from 'react';

// Installs
import { BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

// Custom Components
import { AuthContext } from '../../context/authcontext';
import NotFound from "./notfound";
import Login from "../user/login";
import Account from "../user/account";
import Admin from "../admin/admin";
import Head from "../head/head";
import Student from "../student/student";
import Teacher from "../teacher/teacher";

function Routing() {

  const [user, ] = React.useContext(AuthContext);  

  return(
  
    <Router>
        <Switch>
            <Route path="/" exact>
                { user !== null ?  <Redirect to={'/'+user.userType} /> : <Redirect to={'/login'} /> }
            </Route>
            <Route path="/login">
                { user !== null ? <Redirect to={'/'+user.userType} /> : <Login />}
            </Route>
            <Route path="/admin">
                { user !== null && user?.userType === 'admin' ? <Admin /> : <Redirect to={'/login'} />}
            </Route>
            <Route path="/head">
                { user !== null && user?.userType === 'head'  ? <Head /> : <Redirect to={'/login'} />}
            </Route>
            <Route path="/student">
                { user !== null && user?.userType === 'student'  ? <Student /> : <Redirect to={'/login'} />}
            </Route>
            <Route path="/teacher">
                { user !== null && user?.userType === 'teacher'  ? <Teacher /> : <Redirect to={'/login'} />}
            </Route>
            <Route path="/account">
                { user !== null ? <Account /> : <Redirect to={'/login'} />}
            </Route>
            <Route component={NotFound} />
        </Switch>
    </Router>
  )
}

export default Routing;