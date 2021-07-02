import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { getUser, getUsers } from "../services/userService";

const Users = () => {
	const [users, setUsers] = useState([]);

	async function getAllUsers() {
		const allUsers = await getUsers();
		setUsers(allUsers.data);
		console.log(users);
	}

	// const handleDelete = (id) => {
	// 	deleteChild(id);
	// 	setChildren(
	// 		children.filter((child) => {
	// 			const { _id } = child;
	// 			return _id !== id;
	// 		})
	// 	);
	// };

	// const handleEdit = () => {
	// 	console.log("Edit");
	// };

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
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<th scope="row">2</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<th scope="row">3</th>
					<td>Larry</td>
					<td>the Bird</td>
					<td>@twitter</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default Users;
