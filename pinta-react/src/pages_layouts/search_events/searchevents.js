
import React from 'react';
import {Row, Grid, Col} from 'react-bootstrap';
import BigCalendar from 'react-big-calendar';


class Searchevents extends React.Component {

    render() {
        return (
            <div className="searchevents" style={{height:'650px'}}>
                <Grid>
                    <Row>
                            <h1>Sprawdź Wydarzenia</h1>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <code>&lt;{'Szukasz eventy'} &gt;</code>
                        </Col>
                        <Col xs={12} md={8}>
                            <code>
                                <BigCalendar
                                style={{height: '420px'}}
                                events={[]}
                            /> </code>
                        </Col>

                    </Row>
                </Grid>
            </div>
        )
    }
}


export default Searchevents;