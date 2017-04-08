/**
 * Created by enea on 02.04.17.
 */

import React from 'react';
import {Row, Grid, Col} from 'react-bootstrap';
import BigCalendar from 'react-big-calendar';




class Searchevents extends React.Component {

    render() {
        return (
            <div className="searchevents">
                <Grid>
                    <Row>
                            <h1>Sprawdź Wydarzenia</h1>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                        </Col>
                        <Col xs={12} md={8}>
                            <code> {BigCalendar} </code>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}


export default Searchevents;