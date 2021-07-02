import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		console.log("Username: ", username);
		console.log("Password: ", password);
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
								<form onSubmit={() => handleSubmit()}>
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
											<Button>Login</Button>
										</Col>
									</Row>
								</form>
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
