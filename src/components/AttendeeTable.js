import React from 'react';
import AttendeeTableHeader from './AttendeeTableHeader';
import AttendeeTableRow from './AttendeeTableRow';

class AttendeeTable extends React.Component {
  render() {
    const attendees = this.props.attendees;
    let tableRows = [];

    if (attendees.length > 0) {
      tableRows = attendees.map((attendee, index) =>
      (<AttendeeTableRow number={index + 1} key={attendee.id} attendee={attendee} />));
    } else {
      tableRows = <tr><td></td><td colspan="100%">No matching query found</td></tr>;
    }

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