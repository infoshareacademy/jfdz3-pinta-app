/**
 * Created by enea on 26.03.17.
 */

    import React from 'react';
    import {Row} from 'react-bootstrap';
    import mainbg from './bg.gif';

    class Main extends React.Component {


        render() {


            return (

                <Row>
                    <main>
                        <img src={mainbg} alt="background-party" className="main-bg"/>
                        {/*<h1>Najlepsza aplikacja!</h1>*/}
                    </main>
                </Row>
            )
        }

    }


    export default Main;