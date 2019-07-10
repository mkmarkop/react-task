import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.props.onSearchInput(event.target.value);
  }

  render() {
    return (
      <input type="search" placeholder="Search..." defaultValue={this.props.value} onInput={this.handleInput} />
    );
  }
}

export default SearchBar;