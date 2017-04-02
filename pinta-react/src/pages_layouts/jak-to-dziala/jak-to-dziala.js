/**
 * Created by enea on 26.03.17.
 */

import React from 'react';
import {Col, Thumbnail,Grid, Row} from 'react-bootstrap';

class Thumbnails extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <h1>Jak to działą?</h1>
                    <Col xs={6} md={4}>
                        <Thumbnail src="/pages_layouts/jak-to-dziala/calendar.png" alt="Calendar">
                            <h3>Calendar</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="/assets/thumbnaildiv.png" alt="criteria">
                            <h3>Criteria</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="/assets/thumbnaildiv.png" alt="loigin">
                            <h3>Login</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Thumbnails;