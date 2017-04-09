/**
 * Created by enea on 19.03.17.
 */

import React from 'react';
import {Row, Nav, NavItem, Navbar} from 'react-bootstrap';
import pinta from './pinta.png';

class Navbar2 extends React.Component {

render() {
    return (
        <Row>
            <div className="navbar ">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#"><img src={pinta} alt="pintalogo" className="pintalogo"/></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Main</NavItem>
                            <NavItem eventKey={2} href="#">Jak to działa</NavItem>
                            <NavItem eventKey={3} href="#">Sprawdź Wydarzenia</NavItem>
                            <NavItem eventKey={4} href="#">Login</NavItem>
                            <NavItem eventKey={5} href="#">Nasz Zespół</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </Row>
    );
}
}

export default Navbar2;

