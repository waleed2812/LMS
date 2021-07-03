// Defaults
import React from "react";

// Installs
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Custom
import Routing from "./views/index/routing";
import { alertOptions } from "./constants/options";
import { AuthProvider } from "./context/authcontext";
import Login from "./views/user/login";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./views/admin/admin";
import Student from "./views/student/student";
import Teacher from "./views/teacher/teacher";

function App() {
	return (
		<AlertProvider template={AlertTemplate} {...alertOptions}>
			<AuthProvider>
				<Routing />
				{/* <Header /> */}
				{/* <Login /> */}
				{/* <Footer /> */}
				{/* <Admin /> */}
				{/* <Student /> */}
				{/* <Teacher /> */}
			</AuthProvider>
		</AlertProvider>
	);
}

export default App;
