import React, { Component } from 'react';
import './movie-card.min.css';
import { ReactComponent as HeartIcon  } from './../../images/icons/icon-heart-grey.svg';
import { ReactComponent as HeartIconFull  } from './../../images/icons/icon-heart-full.svg';

class MovieCard extends Component {
  render() {
    let movie = {
       title: 'Star Wars IV: A new hope',
       image: 'https://a.icons8.com/bqYiXWXa/1GleMx/result.png',
       year: 1974,
       favorite: true
    };
    let style = {
      backgroundImage: 'url('+ movie.image+')'
    };
    
    var icon = movie.favorite
      ? <HeartIconFull className="heart" />
      : <HeartIcon className="heart" />;

    return (
       <div className="card" style={style}>
          <button>
              {icon}
          </button>
          <h4>{movie.title}</h4>
          <span>{movie.year}</span>
       </div>
    );
  }
}

export default MovieCard;
