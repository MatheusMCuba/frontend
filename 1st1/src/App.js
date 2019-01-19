import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import Column from './components/Column';
import Item from './components/Item';
import Weather from './components/Weather';

import './css/app.min.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        current: undefined
      }
  }
  render() {
    setTimeout(() => {
      this.setState({
        current:{       
          city: 'Caxias do Sul, RS - Brasil',
          temperature: 20,
          description: 'Nublado',
          min: 5,
          max: 22,
          sensation: 19,
          wind: 18,
          moisture: 89,
          week: [
             {
                title: 'Terça',
                min: 12,
                max: 20
             },
             {
                title: 'Quarta',
                min: 12,
                max: 20
             },
             {
                title: 'Quinta',
                min: 12,
                max: 20
             },
             {
                title: 'Sexta',
                min: 12,
                max: 20
             },
             {
                title: 'Sábado',
                min: 12,
                max: 20
             },                                              
          ]
       } 
      });
    }, 2000);
    
    return (
      <div className="App">
        <h1>Previsão do Tempo</h1>
        <Weather weather={this.state.current}></Weather>
        <Searchbar></Searchbar>
        <hr />
        <div className="list">
            <h2>Capitais</h2>
            <div className="content">
              <Column>
                <Item max="23" min="12" city="Caxias do Sul"></Item>
                <Item max="23" min="12" city="Caxias do Sul"></Item>
                <Item max="23" min="12" city="Caxias do Sul"></Item>
                <Item max="23" min="12" city="Caxias do Sul"></Item>
                <Item max="23" min="12" city="Caxias do Sul"></Item>
              </Column>
              <Column>
                <Item max="23" min="12" city="Caxias do Sul"></Item>
                <Item max="23" min="12" city="Caxias do Sul"></Item>
                <Item max="23" min="12" city="Caxias do Sul"></Item>
                <Item max="23" min="12" city="Caxias do Sul"></Item>
                <Item max="23" min="12" city="Caxias do Sul"></Item>
              </Column>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
