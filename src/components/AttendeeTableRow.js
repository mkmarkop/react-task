import React from 'react';

class AttendeeTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const attendee = this.props.attendee;
    this.props.onClick(attendee.id);
  }

  render() {
    const attendee = this.props.attendee;
    return (
      <tr onClick={this.handleClick}>
        <td>{this.props.number}</td>
        <td>{attendee.firstName}</td>
        <td>{attendee.lastName}</td>
        <td>{attendee.organisation}</td>
      </tr>
    );
  }
}

export default AttendeeTableRow;