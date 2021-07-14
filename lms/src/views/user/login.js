import React, { useState, useContext } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { AuthContext } from '../../context/authcontext';
import { useAlert } from 'react-alert';

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useContext(AuthContext);

	let alert = useAlert();

	const handleSubmit = () => {

		axios.post(global.config.URI_BE + '/user/login', {
			username: username,
			password: password
		}, {
			withCredentials: true
		})
			.then( res => {
				setUser(res.data.data.user);
				alert.show("Logged in", {type: 'success'})
			})
			.catch( err => {
				console.log(err)
				alert.show("Not Logged in", {type: 'error'})
			})
	};

	return (
		<>
			<Header nav1="Users" nav2="Teachers" nav3="Students" nav4="Heads" />
			<div className="login">
				<Container>
					<Row>
						<Col>
							<div className="login-form">
								<h3>Login to your account!</h3>
								{/* <form onSubmit={() => handleSubmit()}> */}
									<Row>
										<Col md="12" sm="12">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													name="username"
													placeholder="username"
													value={username}
													onChange={(e) => setUsername(e.target.value)}
												/>
											</div>
										</Col>
										<Col md="12" sm="12">
											<div className="form-group">
												<input
													type="password"
													className="form-control"
													name="password"
													placeholder="Password"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
												/>
											</div>
										</Col>
										<Col md="12" sm="12">
											<Button type="submit" onClick={handleSubmit}>Login</Button>
										</Col>
									</Row>
								{/* </form> */}
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
};

export default Login;
