import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";

const Header = (props) => {
	return (
		<div className="navbar">
			<Navbar light expand="md">
				<NavbarBrand href="/">LMS</NavbarBrand>
				<Nav navbar>
					<NavItem>
						<NavLink href="/">{props.nav1}</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">{props.nav2}</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">{props.nav3}</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">{props.nav4}</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<Button className="logoutbtn">Logout</Button>
						</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
};

export default Header;
