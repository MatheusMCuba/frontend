import React, { Component } from 'react';

class Item extends Component {
  render() {
    let isTitle = this.props.isTitle;
    let city = this.props.city;
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
                <span>{city.min}°</span>
                <span>{city.max}°</span>
                <span>{city.city}</span>
            </div>  
        );
    }
  }
}

export default Item;