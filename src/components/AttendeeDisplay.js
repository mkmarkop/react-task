import React from 'react';
import AttendeeTable from './AttendeeTable';
import SearchBar from './SearchBar';
import UrlAPI from '../api/UrlAPI';
import './AttendeeDisplay.css';

class AttendeeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      searchText: '',
      value: ''
    };
  }

  componentDidMount() {
    const filter = UrlAPI.getParam('filter').trim();
    if (filter) {
      this.setState({
        searchText: filter,
        value: filter
      });
    }
  }

  handleSearchChange(searchText) {
    const filter = searchText.trim();

    this.setState({
      searchText: filter
    });

    UrlAPI.setParam('filter', filter);
  }

  filterAttendees(attendees) {
    const searchText = this.state.searchText;
    return attendees.filter((attendee) => attendee.organisation.toLowerCase().includes(searchText));
  }

  render() {
    const attendees = this.props.attendees;
    const value = this.state.value;

    return (
      <div className="attendee-display">
        <SearchBar className="search-bar" onSearchInput={this.handleSearchChange} value={value}/>
        <AttendeeTable attendees={this.filterAttendees(attendees)} onSelect={this.props.onSelect}/>
      </div>
    );
  }
}

export default AttendeeDisplay;