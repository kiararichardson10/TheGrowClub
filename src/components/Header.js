import React, { useState } from "react";
import { Navbar, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAddressCard,
  faCircleInfo,
  faHouseChimney,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { UserLoginForm } from "../features/UserLoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar sticky="top" dark expand="md" id="navbar">
      <h2>The Grow Club</h2>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse navbar isOpen={menuOpen}>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <FontAwesomeIcon icon={faHouseChimney} />
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/community">
              <FontAwesomeIcon icon={faPeopleGroup} />
              Community
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              <FontAwesomeIcon icon={faCircleInfo} /> About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              <FontAwesomeIcon icon={faAddressCard} /> Contact
            </NavLink>
          </NavItem>
        </Nav>{" "}
        <UserLoginForm />
      </Collapse>
    </Navbar>
  );
};
