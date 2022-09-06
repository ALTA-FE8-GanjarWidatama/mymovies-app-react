import React from "react";
import "../../src/style/ListMovies.css";

const MovieCard = (props) => {
  return (
    <div className="containerCard">
      <img className="image" src={props.image} alt="ini wahyu" />
      <h1>{props.title}</h1>

      {/* <span className="editor">{this.props.editor}</span>
        <br />
        <span className="minutes">{this.props.minutes}</span>
        <br />
        <span className="genre">{this.props.genre}</span>
        <br /> */}
      <button className="btn" type="button">
        add favorite
      </button>
      <button className="btn" type="button" onClick={props.klik}>
        detail movie
      </button>
    </div>
  );
};

export default MovieCard;
