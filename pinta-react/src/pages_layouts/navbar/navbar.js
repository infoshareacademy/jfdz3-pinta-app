/**
 * Created by enea on 19.03.17.
 */

import React from 'react';
import {Nav,NavItem,NavDropdown, MenuItem, Navbar} from 'react-bootstrap'


class Navbar2 extends React.Component {

render() {
    return (
        <div class="navbar ">
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Pinta</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right 1</NavItem>
                        <NavItem eventKey={2} href="#">Link Right 2</NavItem>
                        <NavItem eventKey={3} href="#">Link Right 3</NavItem>
                        <NavItem eventKey={4} href="#">Link Right 4</NavItem>
                        <NavItem eventKey={5} href="#">Link Right 5</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}
}

export default Navbar2;