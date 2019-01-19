import React, { Component } from 'react';
import Item from './Item';

import '../css/list.min.css';

class Column extends Component {
  render() {
    return (
        <div className="column">
            <Item isTitle="true"></Item>
            {this.props.children}
        </div>
    );
  }
}

export default Column;