/**
 * Created by enea on 26.03.17.
 */

import React from 'react';
import {Col, Thumbnail,Grid, Row} from 'react-bootstrap';
import FaCalendarCheckO from 'react-icons/lib/fa/calendar-check-o';
import FaShareSquareO from 'react-icons/lib/fa/share-square-o';
import FaMobile from 'react-icons/lib/fa/mobile';

class Thumbnails extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <h1>Jak to działą?</h1>
                    <Col xs={6} md={4}>
                        <Thumbnail>
                            <div className="feature-item"><FaCalendarCheckO/></div>
                            <h3>Kalendarz</h3>
                            <p>Nasza aplikacja oferuje korzystanie z osobistego kalendarza eventów, który pozwala na kategoryzowanie wydarzeń i ustawianie przypomnień. Dzięki temu łatwiej jest zaplanować swój czas, czy z odpowiednim wyprzedzeniem kupić bilety.</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail>
                            <div className="feature-item"><FaShareSquareO/></div>
                        <h3>Kryteria</h3>
                            <p>Wyszukiwanie wydarzeń odbywa się dzięki zastosowaniu odpowiednich kryteriów, opisujących rodzaj i charakter imprezy (np. impreza biznesowa, koncert, festiwal na otwartym powietrzu itd.).</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail>
                            <div className="feature-item"><FaMobile/></div>
                            <h3>Login</h3>
                            <p>Wszystkie informacje przechowywane są w profilu użytkownika, do którego zastosowano łatwy i bezpieczny system logowania przez portale społecznościowe, takie jak Facebook, czy Google. Nie wymaga on tworzenia i zapamiętywania dodatkowych haseł.</p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Thumbnails;