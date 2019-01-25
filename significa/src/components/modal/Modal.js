import React, { Component } from 'react';
import Label from './../label/Label';
import Button from './../button/Button';

import './modal.min.css';
import { ReactComponent as HeartIcon  } from './../../images/icons/icon-heart-grey.svg';
import { ReactComponent as HeartIconFull  } from './../../images/icons/icon-heart-full.svg';
import { ReactComponent as BackArrow  } from './../../images/icons/icon-arrow-grey.svg';

class Modal extends Component {
  render() {
    let movie = {
       title: 'Star Wars IV: A new hope',
       image: 'https://a.icons8.com/bqYiXWXa/rwRbaJ/card__movie--big.png',
       year: 1974,
       favorite: true
    };
    
    return (
       <div className='modal'>
            <button className="back">
                <BackArrow/>
            </button>            
            <div className="wrapper">
                <div className="info">
                    <ul>
                        <li>86 min</li>
                        <li>2014</li>
                        <li>
                            <label>R</label>
                        </li>
                    </ul>
                    <h1>{movie.title}</h1>
                    <div className="labels">
                        <Label type="imdb" text="9/10" />
                        <Label type="rotten" text="82%" />
                        <Button>
                            <HeartIcon />
                            Adicionar aos Favoritos
                        </Button>
                    </div>
                    <div className="block">
                        <h3>Plot</h3>
                        <p>
                            Viago, Deacon, and Vladislav are vampires who are finding that modern life has them struggling with the mundane - like paying rent, keeping up with the chore wheel, trying to get into nightclubs, and overcoming flatmate conflicts.
                        </p>
                    </div>
                    <div className="row">
                        <div className="block">
                            <h3>Cast</h3>
                            <ul>
                                <li>Jemaine Clement</li>
                                <li>Cori Gonzalez-Macuer</li>
                                <li>Taika Waititi</li>
                                <li>Jonny Brugh</li>
                            </ul>
                        </div>
                        <div className="block">
                            <h3>Genre</h3>
                            <ul>
                                <li>Comedy</li>
                                <li>Horror</li>
                            </ul>
                        </div>
                        <div className="block">
                            <h3>Director</h3>
                            <ul>
                                <li>Jemaine Clement</li>
                                <li>Taika Waititi</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="cover">
                    <img src={movie.image} alt={movie.title} />
                </div>
            </div> 
       </div>
    );
  }
}

export default Modal;
