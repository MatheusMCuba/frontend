import React, { Component } from 'react';
import './css/App.min.css';
import { ReactComponent as Logo } from './images/icons/logo.svg';
import Searchbar from './components/searchbar/Searchbar';
import Modal from './components/modal/Modal';
import MovieCard from './components/movie-card/MovieCard';

class App extends Component {
  constructor(props){
     super(props);

     this.state = {
        current_movie: true,
     };
  }
  render() {
    return (
      <div className="App">
          <Logo className="logo" />
          {!this.state.current_movie &&
              <Searchbar />
          }
          <div className="content">
            {this.state.current_movie ? (
                <Modal/>
            ) : (
                <MovieCard></MovieCard>
            )}  
          </div>
      </div>
    );
  }
}

export default App;
