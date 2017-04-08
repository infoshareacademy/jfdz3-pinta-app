import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';
import Navbar from './pages_layouts/navbar/navbar';
import Main from './pages_layouts/main/main';
import Thumbnails from './pages_layouts/jak-to-dziala/jak-to-dziala'
import Searchevents from './pages_layouts/search_events/searchevents'
import Login from "./pages_layouts/login/login";
import Team from "./pages_layouts/team/team";
import Footer from "./pages_layouts/footer/footer";
// BigCagelendar
import moment from 'moment'
import BigCalendar from 'react-big-calendar'
BigCalendar.momentLocalizer(moment)

import { getEvents } from './gcal'

// require('style!css!react-big-calendar/lib/css/react-big-calendar.css')



class App extends Component {
    constructor() {
        super()
        this.state = {
            events: []
        }
    }
    componentDidMount() {
        getEvents((events) => {
            console.log(events);
            // this.setState({events})
        })

    }


  render() {
    return (
      <div className='App'>
        <div className='App-header'>
            <div className='Navbar'>
                <Navbar/>
            </div>


          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h2>Welcome to React</h2>*/}
        </div>
          <div className='Main'>
              <Main/>
          </div>
          <div className='Thumbnails'>
              <Thumbnails/>
          </div>
          <div className="Searchevents">
              <Searchevents/>

              <BigCalendar
                  style={{height: '420px'}}
                  events={this.state.events}
              />
          </div>
          <div className="Login">
              <Login/>
          </div>
          <div className="team">
              <Team/>
          </div>
          <div className="footer">
              <Footer/>
          </div>
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}

      </div>
    );
  }
}
export default App;
