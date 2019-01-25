import React, { Component } from 'react';
import './button.min.css';

class Button extends Component {
  render() {
    let icon = this.props.icon;
    return (
        <button className="btn">
            {this.props.children}
        </button>
    );
  }
}

export default Button;
