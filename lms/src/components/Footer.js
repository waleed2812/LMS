import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col lg="4">
						<div>
							<a href="/">
								<h4>Learning Management System</h4>
							</a>
							<p>
								Lorem ipsum dolor, sit amet earum consectetur adipisicing elit. Cupiditate rerum quidem fugiat
								sapiente! Iusto quae perspiciatis, repudiandae ipsam minus et ex, aliquid dolor molestias, earum
								enim officiis porro obcaecati.
							</p>
						</div>
					</Col>
					<Col lg="4">
						<div>
							<h3>Services</h3>
							<ul>
								<li>Service A</li>
								<li>Service A</li>
								<li>Service A</li>
								<li>Service A</li>
								<li>Service A</li>
								<li>Service A</li>
								<li>Service A</li>
							</ul>
						</div>
					</Col>
					<Col lg="4">
						<div>
							<h3>Get In Touch</h3>
							<ul>
								<li>
									<a href="/">
										<span>Hotline:</span>
										<br />
										<span>Phone: +92123456789</span>
									</a>
								</li>
								<li>
									<a href="/">
										<span>Email:</span>
										<br />
										<span>abc@mail.com</span>
									</a>
								</li>
								<li>
									<span>Address:</span> <br />
									<span>
										123, ABC Road, Islamabad <span className="contact-us">Pakistan</span>
									</span>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
