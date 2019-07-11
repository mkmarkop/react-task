import React from 'react';
import './AttendeeDetails.css';

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
    
    return (
      <div className={"attendee-details " + (this.props.attendee ? "shown" : "")}>
        <header className="attendee-details-header">
          <h2>CEO Details</h2>
          <strong
            className="close-button"
            onClick={this.props.onClose}>x</strong>
        </header>
        <div className="attendee-data-table">
          <div className="attendee-data">
            <p className="attendee-data-key">First Name</p>
            <p className="attendee-data-value">{attendee.firstName}</p>
          </div>

          <div className="attendee-data">
            <p className="attendee-data-key">Last Name</p>
            <p className="attendee-data-value">{attendee.lastName}</p>
          </div>

          <div className="attendee-data">
          <p className="attendee-data-key">Organisation</p>
          <p className="attendee-data-value">{attendee.organisation}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AttendeeDetails;