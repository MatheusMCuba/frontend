import React, { Component } from 'react';
import './searchbar.min.css';
import { ReactComponent as SearchIcon  } from './../../images/icons/icon-magnifier-grey.svg'

class Searchbar extends Component {
  render() {
    return (
       <div className="search">
          <SearchIcon />
          <input placeholder="Search movies..."/>
       </div>
    );
  }
}

export default Searchbar;
