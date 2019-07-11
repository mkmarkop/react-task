import React from 'react';
import './AttendeeDetails.css';
import AttendeeDetailsData from './AttendeeDetailsData';

class AttendeeDetails extends React.Component {
  emptyAttendee() {
    return {
      firstName: '',
      lastName: '',
      organisation: ''
    };
  }

  render() {
    const {attendee = this.emptyAttendee()} = this.props;
    
    return (
      <div className={"attendee-details " + (this.props.attendee ? "shown" : "")}>
        <header className="attendee-details-header">
          <h2>CEO Details</h2>
          <strong
            className="close-button"
            onClick={this.props.onClose}>x</strong>
        </header>
        <div className="attendee-data-table">
          <AttendeeDetailsData dataKey="First Name" dataValue={attendee.firstName} />
          <AttendeeDetailsData dataKey="Last Name" dataValue={attendee.lastName} />
          <AttendeeDetailsData dataKey="Organisation" dataValue={attendee.organisation} />
          <AttendeeDetailsData dataKey="Gender" dataValue={attendee.gender} />
          <AttendeeDetailsData dataKey="Phone" dataValue={attendee.phone} />
        </div>
      </div>
    );
  }
}

export default AttendeeDetails;