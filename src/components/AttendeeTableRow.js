import React from 'react';

class AttendeeTableRow extends React.Component {
  render() {
    const attendee = this.props.attendee;
    return (
      <tr>
        <td>{this.props.number}</td>
        <td>{attendee.firstName}</td>
        <td>{attendee.lastName}</td>
        <td>{attendee.organisation}</td>
      </tr>
    );
  }
}

export default AttendeeTableRow;