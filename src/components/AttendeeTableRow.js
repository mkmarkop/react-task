import React from 'react';
import './AttendeeTableRow.css';

class AttendeeTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {attendee} = this.props;
    this.props.onClick(attendee.id);
  }

  render() {
    const {attendee} = this.props;
    return (
      <tr
        className={"attendee-table-row " + (this.props.selected === true ? "selected" : "")}
        onClick={this.handleClick}>
        <td>{this.props.number}</td>
        <td>{attendee.firstName}</td>
        <td>{attendee.lastName}</td>
        <td>{attendee.organisation}</td>
        <td>{attendee.gender}</td>
      </tr>
    );
  }
}

export default AttendeeTableRow;