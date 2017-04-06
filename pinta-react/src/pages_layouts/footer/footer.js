/**
 * Created by enea on 06.04.17.
 */

import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square';


class Footer extends React.Component {


    render() {

        return (
            <Grid>
                <Row className="show-grid">
                    <div className="footer">
                        <Col md={6} mdPush={6}>
                            <ul className="footer-nav">
                                <li><a href="#">Jak to działa</a></li>
                                <li><a href="#">Sprawdź Wydarzenia</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Nasz Zespół</a></li>
                                <li><a href="#">Kontakt</a></li>
                            </ul>
                        </Col>
                        <Col md={6} mdPull={6}>
                            <ul className="social-links">
                                <li className="facebook"><a href="#"><FaFacebookSquare/></a></li>
                                <li className="googleplus"><a href="#"><FaGooglePlusSquare/></a></li>
                                <li className="instagram"><a href="#"><FaInstagram/></a></li>
                            </ul>
                        </Col>
                    </div>
                </Row>
            </Grid>
        )
    }

}
export default Footer;