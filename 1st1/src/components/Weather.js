import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/weather.min.css';

class Weather extends Component {
  render() {
    let weather = this.props.weather;
    if(!weather)
        return '';

    return (
        <div className="weather">
            <div className="content">
              <button className="close" onClick={this.props.onClick}>
                <FontAwesomeIcon icon="times"></FontAwesomeIcon>
              </button>
              <strong>{weather.city}</strong>
              <h3>{weather.temperature}°C&nbsp;{weather.description}</h3>
              <div className="row">
                  <div className="column">
                    <div className="block">
                        <FontAwesomeIcon icon="arrow-down"></FontAwesomeIcon>
                        <span>{weather.min}°</span>
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon="arrow-up"></FontAwesomeIcon>
                        <span>{weather.max}°</span>
                    </div>
                  </div>
                  <div className="column">
                    Sensação
                    <strong>{weather.sensation}°C</strong>
                  </div>
              </div>
              <div className="row">
                  <div className="column">
                    Vento
                    <strong>{weather.wind}km/h</strong>
                  </div>
                  <div className="column">
                    Umidade
                    <strong>{weather.moisture}%</strong>
                  </div>
              </div>
            </div>
            <hr />
            <div className="content">
                <div className="week">
                    {(weather.week || []).map((item, i) => {
                        return (
                          <div key={i} className="week-item">
                            <span>{item.title}</span>
                            <span>{item.min}°&nbsp;{item.max}°</span>
                          </div>
                        ); 
                    })}                    
                </div>
            </div>
        </div>
    );
  }
}

export default Weather;