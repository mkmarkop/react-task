import React from 'react';
import AttendeeTable from './AttendeeTable';

class AttendeeDisplay extends React.Component {
  render() {
    const attendees = this.props.attendees;
    return <AttendeeTable attendees={attendees} />;
  }
}

export default AttendeeDisplay;