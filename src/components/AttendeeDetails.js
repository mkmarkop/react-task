import React from 'react';

class AttendeeDetails extends React.Component {
  emptyAttendee() {
    return {
      firstName: '',
      lastName: '',
      organisation: ''
    };
  }

  render() {
    const attendee = this.props.attendee || this.emptyAttendee();
    
    if (attendee)
    return (
      <div>
        <p>First Name</p>
        <p>{attendee.firstName}</p>

        <p>Last Name</p>
        <p>{attendee.lastName}</p>

        <p>Organisation</p>
        <p>{attendee.organisation}</p>
      </div>
    );
  }
}

export default AttendeeDetails;