/**
 * Created by enea on 26.03.17.
 */

import React from 'react';
import mainbg from './bg.jpg';

class Main extends React.Component {


    render() {


        return (

            <main>
                <img src={mainbg} alt="background-party" className="main-bg"/>
                {/*<h1>Najlepsza aplikacja!</h1>*/}
            </main>

        )
    }

}


export default Main;