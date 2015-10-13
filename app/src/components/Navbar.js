import React from 'react';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-tabs-navigation">
        <div className="nav-tabs-wrapper">
          <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
            <NavItem eventKey={1} href="/home">Jobs</NavItem>
            <NavItem eventKey={2} title="Item">Scores</NavItem>
            <NavItem eventKey={3} title="Item">Profile</NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}
