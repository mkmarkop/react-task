import React from 'react';
import AttendeeTable from './AttendeeTable';
import SearchBar from './SearchBar';
import UrlAPI from '../api/UrlAPI';
import './AttendeeDisplay.css';

class AttendeeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.defaultSearchValue = '';
    this.state = {
      searchText: ''
    };
  }

  componentDidMount() {
    let filter = UrlAPI.getParam('filter');
    if (filter) {
      filter = filter.trim();
      this.setState({
        searchText: filter
      });
    }

    this.defaultSearchValue = filter;
  }

  handleSearchChange(searchText) {
    const filter = searchText.trim();

    this.setState({
      searchText: filter
    });

    if (filter) {
      UrlAPI.setParam('filter', filter);
    } else {
      UrlAPI.clearParam('filter');
    }
    
    this.props.onSearchInput(searchText);
  }

  filterAttendees(attendees) {
    const {searchText} = this.state;
    return attendees.filter((attendee) => attendee.organisation.toLowerCase().includes(searchText));
  }

  render() {
    const {attendees} = this.props;

    return (
      <div className="attendee-display">
        <SearchBar
          className="search-bar"
          onSearchInput={this.handleSearchChange}
          value={this.defaultSearchValue}/>
        <AttendeeTable
          selected={this.props.selected}
          attendees={this.filterAttendees(attendees)}
          onSelect={this.props.onSelect}/>
      </div>
    );
  }
}

export default AttendeeDisplay;