import React from "react";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button, Table } from "reactstrap";
import Users from "../../components/Users";

function Admin() {
	return (
		<>
			<Header nav1="Users" nav2="Teachers" nav3="Students" nav4="Heads" />
			<div className="admin">
				<h2>Users</h2>
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
