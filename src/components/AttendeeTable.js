import React from 'react';
import AttendeeTableHeader from './AttendeeTableHeader';
import AttendeeTableRow from './AttendeeTableRow';
import './AttendeeTable.css';

class AttendeeTable extends React.Component {
  render() {
    const {attendees} = this.props;
    let tableRows = [];

    if (attendees.length > 0) {
      tableRows = attendees.map((attendee, index) => (
        <AttendeeTableRow
          number={index + 1}
          key={attendee.id} 
          attendee={attendee}
          selected={this.props.selected === attendee.id}
          onClick={this.props.onSelect}/>
      ));
    } else {
      tableRows = <tr><td></td><td colSpan="100%">No matching query found</td></tr>;
    }

    return (
      <table className="attendee-table">
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