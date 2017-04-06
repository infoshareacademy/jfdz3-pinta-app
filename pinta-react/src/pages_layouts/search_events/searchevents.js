/**
 * Created by enea on 02.04.17.
 */

import React from 'react';
import {Row, Grid, Col} from 'react-bootstrap';
import Bigcalendar from 'react-big-calendar';

require('style!css!react-big-calendar/lib/css/react-big-calendar.css')


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
                            { Bigcalendar }
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}


export default Searchevents;