import React from 'react';
import './App.css';
import AttendeeAPI from '../api/AttendeeAPI';
import AttendeeDisplay from './AttendeeDisplay';
import AttendeeDetails from './AttendeeDetails';
import UrlAPI from '../api/UrlAPI';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      attendees: [],
      selectedAttendee: undefined
    };
  }

  handleSelect(id) {
    AttendeeAPI.getAttendee(id)
      .then((attendee) => {
        this.setState({selectedAttendee: attendee})
      });

    UrlAPI.setParam('selected', id);
  }

  componentDidMount() {
    AttendeeAPI.getAllAttendees()
      .then((attendees) => {
        this.setState({attendees: attendees})
      });

    const id = +UrlAPI.getParam('selected');
    if (id) {
      this.handleSelect(id);
    }
  }

  render() {
    const attendees = this.state.attendees;
    const selected = this.state.selectedAttendee;
    
    return (
      <div className="content">
        <AttendeeDisplay attendees={attendees} onSelect={this.handleSelect} />
        <AttendeeDetails attendee={selected} />
      </div>
    );
  }
}

export default App;
