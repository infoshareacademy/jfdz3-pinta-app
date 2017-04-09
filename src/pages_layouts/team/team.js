/**
 * Created by enea on 06.04.17.
 */

import React from 'react';
import {Row, Grid, Col, Clearfix} from 'react-bootstrap';
import enea from './enea.png';
import krzysztof from './krzysztof.png';

class Team extends React.Component {


    render() {
        return (
            <div className="team">
                <Grid>
                    <Row>
                            <h1>Nasz Zespół</h1>
                    </Row>
                    <Row>

                        <Row className="show-grid">
                            <Col sm={6} md={3}>
                                <img src={krzysztof} alt="krzysztof-profile-pic" className="krzysztofprofile"/>

                            </Col>
                            <Col sm={6} md={3}>
                                <h3>Krzysztof Garski</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Col>
                            <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
                            <Col sm={6} md={3}>
                                <img src={enea} alt="enea-profile-pic" className="eneaprofile"/>
                            </Col>
                            <Col sm={6} md={3}>
                                <h3>Enea Jorgji</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Col>
                        </Row>


                    </Row>
                </Grid>
            </div>

        )
    }

}
export default Team;