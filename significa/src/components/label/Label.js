import React, { Component } from 'react';
import './label.min.css';
import { ReactComponent as IMDB } from './../../images/icons/logo-imdb.svg';
import { ReactComponent as Rotten } from './../../images/icons/logo-rotten-tomatoes.svg';

class Label extends Component {
  render() {
    let type = this.props.type;
    return (
        <div className="label">
            <div className={'icon '+ type}>
                {type === 'imdb' ? (
                    <IMDB />
                ) : (
                    <Rotten />
                )}
            </div>
            <div className="text">
                <span>
                    {this.props.text}
                </span>
            </div>
        </div>
    );
  }
}

export default Label;
