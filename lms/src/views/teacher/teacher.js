import React from "react";
import { Container, Row, Col, Button, Table } from "reactstrap";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function Teacher() {
	return (
		<>
			<Header nav1="Teacher Dashboard" />
			<Container>
				<Row>
					<Col className="sidebar" lg="3">
						<Sidebar />
					</Col>
					<Col className="main-area" lg="9">
						<h2>Students</h2>
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
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default Teacher;
