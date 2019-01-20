import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/searchbar.min.css';

class SearchBar extends Component {
  render() {
    return (
        <div className="searchbar">
            <input 
                placeholder="Insira aqui o nome da cidade"
                onBlur={this.props.onBlur}
            />
            <FontAwesomeIcon icon="search"></FontAwesomeIcon>
        </div>
    );
  }
}

export default SearchBar;