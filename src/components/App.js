import React from 'react';
import './App.css';
import AttendeeAPI from '../api/AttendeeAPI';
import AttendeeDisplay from './AttendeeDisplay';
import AttendeeDetails from './AttendeeDetails';
import {PARAM_SELECTED, default as UrlAPI} from '../api/UrlAPI';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCloseDetails = this.handleCloseDetails.bind(this);
    this.state = {
      attendees: [],
      selectedAttendee: undefined
    };
  }

  handleCloseDetails() {
    this.setState({selectedAttendee: undefined});
    UrlAPI.clearParam(PARAM_SELECTED);
  }

  handleSelect(id) {
    AttendeeAPI.getAttendee(id)
      .then((attendee) => {
        this.setState({selectedAttendee: attendee})
      });

    UrlAPI.setParam(PARAM_SELECTED, id);
  }

  componentDidMount() {
    AttendeeAPI.getAllAttendees()
      .then((attendees) => {
        this.setState({attendees: attendees})
      });

    const id = +UrlAPI.getParam(PARAM_SELECTED);
    if (id) {
      this.handleSelect(id);
    }
  }

  render() {
    const {attendees, selectedAttendee} = this.state;
    
    return (
      <div>
        <header className="app-header">
          <h1><a href="/">ZAGREB MEETUP</a></h1>
        </header>
        <main className="app-main">
          <AttendeeDisplay
            attendees={attendees}
            selected={selectedAttendee ?  selectedAttendee.id : -1}
            onSelect={this.handleSelect}
            onSearchInput={this.handleCloseDetails}/>
          <AttendeeDetails
            attendee={selectedAttendee}
            onClose={this.handleCloseDetails}/>
        </main>
      </div>
    );
  }
}

export default App;
