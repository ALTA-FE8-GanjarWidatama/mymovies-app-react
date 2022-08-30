import React, { Component } from "react";
import "../../src/style/ListMovies.css";

export default class MovieCard extends Component {
  render() {
    return (
      <div className="containerCard">
        <img className="image" src={this.props.src} />
        <h1>{this.props.title}</h1>
        <span className="editor">{this.props.editor}</span>
        <br />
        <span className="minutes">{this.props.minutes}</span>
        <br />
        <span className="genre">{this.props.genre}</span>
        <br />
        <button className="btn" type="button" onclick="alert('Hello world!')">
          add favorite
        </button>
      </div>
    );
  }
}
