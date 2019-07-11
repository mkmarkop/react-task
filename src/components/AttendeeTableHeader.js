import React from 'react';
import './AttendeeTableHeader.css';

class AttendeeTableHeader extends React.Component {
  render() {
    return (
      <tr className="attendee-table-header">
        <th></th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Organisation</th>
      </tr>
    )
  }
}

export default AttendeeTableHeader;