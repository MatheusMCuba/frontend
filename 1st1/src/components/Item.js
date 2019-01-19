import React, { Component } from 'react';

class Item extends Component {
  render() {
    let isTitle = this.props.isTitle;
    if(isTitle)
    {
        return(
            <div className="item">
                <span>Min</span>
                <span>Máx</span>
                <span></span>
            </div>  
        );
    }
    else{
        return (
            <div className="item">
                <span>{this.props.min}°</span>
                <span>{this.props.max}°</span>
                <span>{this.props.city}</span>
            </div>  
        );
    }
  }
}

export default Item;