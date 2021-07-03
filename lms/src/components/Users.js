import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import { getUser, getUsers } from "../services/userService";

const Users = () => {
	const [users, setUsers] = useState([]);

	async function getAllUsers() {
		const allUsers = await getUsers();
		setUsers(allUsers.data);
		console.log(users);
	}

	useEffect(() => {
		getAllUsers();
	}, []);

	return (
		<Table bordered>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Email</th>
					<th>Phone Number</th>
					<th>Profile Image</th>
					<th>User type</th>
					<th>Signup on</th>
					<th>Edit/Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>demo@mail.com</td>
					<td>123456788</td>
					<td></td>
					<td>Teacher</td>
					<td>21-7-21</td>
					<td>
						<Button className="editbtn">Edit</Button>
						<Button className="dltbtn">Delete</Button>
					</td>
				</tr>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>demo@mail.com</td>
					<td>123456788</td>
					<td></td>
					<td>Teacher</td>
					<td>21-7-21</td>
					<td>
						<Button className="editbtn">Edit</Button>
						<Button className="dltbtn">Delete</Button>
					</td>
				</tr>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>demo@mail.com</td>
					<td>123456788</td>
					<td></td>
					<td>Teacher</td>
					<td>21-7-21</td>
					<td>
						<Button className="editbtn">Edit</Button>
						<Button className="dltbtn">Delete</Button>
					</td>
				</tr>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>demo@mail.com</td>
					<td>123456788</td>
					<td></td>
					<td>Teacher</td>
					<td>21-7-21</td>
					<td>
						<Button className="editbtn">Edit</Button>
						<Button className="dltbtn">Delete</Button>
					</td>
				</tr>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>demo@mail.com</td>
					<td>123456788</td>
					<td></td>
					<td>Teacher</td>
					<td>21-7-21</td>
					<td>
						<Button className="editbtn">Edit</Button>
						<Button className="dltbtn">Delete</Button>
					</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default Users;
