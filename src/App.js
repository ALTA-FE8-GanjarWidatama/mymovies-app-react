import React, { Component } from "react";
import MovieCard from "./components/MoviesCard";
import "../src/style/ListMovies.css";
import Navbar from "./components/Navbar";
import axios from "axios";

// import Navbar from "./components/Navbar";

export default class App extends Component {
  // state = {
  //   count: 0,
  //   text: ["Hello World", "Hello Guys"],
  // };

  // onCount() {
  //   this.setState({
  //     count: this.state.count + 1,
  //     text: "Hey guys",
  //   });
  // }

  render() {
    const ListMovies = [];

    return (
      <div>
        <Navbar />
        <div className="mapes">
          {ListMovies.map((item) => {
            return (
              <MovieCard
                src={item.image}
                title={item.title}
                editor={item.editor}
                minutes={item.minutes}
                genre={item.genre}
              />
            );
          })}
        </div>
        {/* <MovieCard /> */}
      </div>
    );
  }
}
