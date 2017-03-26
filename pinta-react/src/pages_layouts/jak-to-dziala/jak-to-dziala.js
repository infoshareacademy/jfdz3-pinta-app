/**
 * Created by enea on 26.03.17.
 */

import React from 'react';
import {Button, Col, Thumbnail,Grid, Row} from 'react-bootstrap'

class Thumbnails extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <h1>Jak to działą?</h1>
                    <Col xs={6} md={4}>
                        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Thumbnails;