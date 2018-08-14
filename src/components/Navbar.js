import {Navbar, NavItem, Nav, NavLink, NavbarBrand} from 'reactstrap';
import React from 'react';

export default class NavComponent extends React.Component {
  render() {
    return (
    <Navbar>
      <NavbarBrand>Galvanize Snacks</NavbarBrand>
      <Nav className="ml-auto">
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/snacks">Snacks</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )}
}
