import React from "react";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button, Table } from "reactstrap";
import Users from "../../components/Users";
import axios from "axios";
import { useAlert } from "react-alert";

function Admin() {

	let alert = useAlert();

	const getCurrentUser = () => {
		axios.get(global.config.URI_BE + '/user/current', {withCredentials: true})
			.then( res => {
				console.log(res);
				alert.show("Logged In", {type: "success"})
			})
			.catch( err => {
				console.log(err);
				alert.show("Not Logged In", {type: "error"})
			})
	}

	return (
		<>
			<Header nav1="Users" nav2="Teachers" nav3="Students" nav4="Heads" />
			<div className="admin">
				<h2>Users</h2>
				<Button onClick={getCurrentUser}>Is Logged In</Button>
				<Button>Add User</Button>
				<div className="users">
					<Users />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Admin;
