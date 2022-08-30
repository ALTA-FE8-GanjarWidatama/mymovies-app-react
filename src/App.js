import React, { Component } from "react";
import MovieCard from "./components/MoviesCard";

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
    const ListMovies = [
      {
        image:
          "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2022/08/16/81875-ilustrasi-one-piece-red-ka-20220816025957.jpg",
        title: "One Piece Film Red ",
        editor: "2022 Masashi Kishimoto",
        minutes: "115 min",
        genre: "Animation, Adventure, action",
      },
    ];

    return (
      <div>
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
        {/* <MovieCard /> */}
      </div>
    );
  }
}
