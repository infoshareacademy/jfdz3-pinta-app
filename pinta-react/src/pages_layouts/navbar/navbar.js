/**
 * Created by enea on 19.03.17.
 */

import React from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap'


class Navbar2 extends React.Component {

render() {
    return (
        <div className="navbar ">
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Pinta</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Jak to działa</NavItem>
                        <NavItem eventKey={3} href="#">Sprawdź Wydarzenia</NavItem>
                        <NavItem eventKey={4} href="#">Opinie</NavItem>
                        <NavItem eventKey={5} href="#">Nasz Zespół</NavItem>
                        <NavItem eventKey={5} href="#">Kontakt</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}
}

export default Navbar2;