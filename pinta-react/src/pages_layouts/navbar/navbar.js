/**
 * Created by enea on 19.03.17.
 */

import React from 'react';
import {Row, Image, Nav, NavItem, Navbar} from 'react-bootstrap'


class Navbar2 extends React.Component {

render() {
    return (
        <Row>
            <div className="navbar ">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#"><Image src='./pages_layouts/navbar/pinta.png' className="pintalogo" alt="logo" responsive /></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Jak to działa</NavItem>
                            <NavItem eventKey={2} href="#">Sprawdź Wydarzenia</NavItem>
                            <NavItem eventKey={3} href="#">Login</NavItem>
                            <NavItem eventKey={4} href="#">Nasz Zespół</NavItem>
                            <NavItem eventKey={5} href="#">Kontakt</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </Row>
    );
}
}

export default Navbar2;

