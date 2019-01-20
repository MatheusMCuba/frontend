import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import Column from './components/Column';
import Item from './components/Item';
import Weather from './components/Weather';
import AccuWeather from './api/AccuWeather';

import './css/app.min.css';

const weekDays = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado'
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: undefined,
      api: new AccuWeather(),
      capitals: []
    }

    this.getCapitalsForecast();
  }
  closeCurrentLocation(){
     this.setState({current: undefined});
  }
  getCapitalsForecast(){
    this.state.api.getCapitalsForecast()
      .then((data) => {
        let capitals = data.map((x) => {
           return {
              city: x.data.location.name,
              min: Math.floor(x.data.forecast.forecastday[0].day.mintemp_c),
              max: Math.floor(x.data.forecast.forecastday[0].day.maxtemp_c),
           }
        }).sort((a, b) => a.city.localeCompare(b.city));
        this.setState({
           capitals 
        });
    });
  }
  searchForecast = event => {
    this.state.api.getForecastFromLocation(event.target.value, 5)
      .then((data) => {
        let current = {
           city: data.data.location.name + ' ' + data.data.location.region + ' - ' + data.data.location.country,
           temperature: Math.floor(data.data.current.temp_c),
           description: data.data.current.condition.text,
           min: Math.floor(data.data.forecast.forecastday[0].day.mintemp_c),
           max: Math.floor(data.data.forecast.forecastday[0].day.maxtemp_c),
           sensation: Math.floor(data.data.current.feelslike_c),
           wind: Math.floor(data.data.current.wind_kph),
           moisture: Math.floor(data.data.current.humidity),
           week: data.data.forecast.forecastday.map((x) => {
              return {
                title: weekDays[new Date(x.date_epoch * 1000).getDay()],
                min: Math.floor(x.day.mintemp_c),
                max: Math.floor(x.day.maxtemp_c)
              } 
           })
        };
        this.setState({ current });
      });
  };
  render() {
    return (
      <div className="App">
        <h1>Previsão do Tempo</h1>
        <Weather onClick={this.closeCurrentLocation.bind(this)} weather={this.state.current}></Weather>
        <Searchbar onBlur={this.searchForecast.bind(this)}></Searchbar>
        <hr />
        <div className="list">
            <h2>Capitais</h2>
            <div className="content">
              <Column>
                {(this.state.capitals || []).slice(0, (this.state.capitals || []).length / 2).map((x, i) => {
                   return(
                      <Item key={i} city={x}></Item>
                   );
                })}
              </Column>
              <Column>
                {(this.state.capitals || []).slice(((this.state.capitals || []).length / 2) + 1).map((x, i) => {
                   return(
                      <Item key={i} city={x}></Item>
                   );
                })}
              </Column>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
