import React from 'react';
import './AttendeeDetailsData.css';

class AttendeeDetailsData extends React.Component {
  render() {
    return (
      <div className="attendee-data">
          <p className="attendee-data-key">{this.props.dataKey}</p>
          <p className="attendee-data-value">{this.props.dataValue}</p>
      </div>
    );
  }
}

export default AttendeeDetailsData;