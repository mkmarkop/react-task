import React from 'react';
import AttendeeTable from './AttendeeTable';
import SearchBar from './SearchBar';

class AttendeeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      searchText: '',
    }
  }

  handleSearchChange(searchText) {
    this.setState({
      searchText: searchText.trim()
    });
  }

  filterAttendees(attendees) {
    const searchText = this.state.searchText;
    return attendees.filter((attendee) => attendee.organisation.toLowerCase().includes(searchText));
  }

  render() {
    const attendees = this.props.attendees;
    return (
      <div>
        <SearchBar onSearchInput={this.handleSearchChange} />
        <AttendeeTable attendees={this.filterAttendees(attendees)} onSelect={this.props.onSelect}/>
      </div>
    );
  }
}

export default AttendeeDisplay;