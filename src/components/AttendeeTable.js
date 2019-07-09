import React from 'react';
import AttendeeTableHeader from './AttendeeTableHeader';
import AttendeeTableRow from './AttendeeTableRow';

class AttendeeTable extends React.Component {
  render() {
    const attendees = this.props.attendees;
    const tableRows = attendees.map((attendee) =>
      (<AttendeeTableRow key={attendee.id} attendee={attendee} />));

    return (
      <table>
        <thead>
          <AttendeeTableHeader/>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    )
  }
}

export default AttendeeTable;