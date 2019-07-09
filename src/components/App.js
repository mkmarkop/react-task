import React from 'react';
import './App.css';
import AttendeeAPI from '../api/AttendeeAPI';
import AttendeeDisplay from './AttendeeDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: []
    };
  }

  componentDidMount() {
    AttendeeAPI.getAllAttendees()
      .then((attendees) => {
        this.setState({attendees: attendees})
      });
  }

  render() {
    const attendees = this.state.attendees;
    
    return (
      <AttendeeDisplay attendees={attendees} />
    );
  }
}

export default App;
