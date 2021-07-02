import React from "react";
import { Container, Row, Col } from "reactstrap";

const Sidebar = () => {
	return (
		<>
			<ul className="list">
				<li>Atendence</li>
				<li>Quiz</li>
				<li>Assignment</li>
				<li>Material</li>
				<li>Results</li>
			</ul>
		</>
	);
};

export default Sidebar;
