import React, { Component } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MoviesCard";
import axios from "axios";

const BASEIMAGE = "https://image.tmdb.org/t/p/original";
export default class Home extends Component {
  state = {
    title: [],
  };

  componentDidMount() {
    const self = this;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=6abe3c5cae209af53dc03ebaee318a77&language=en-US&page=1`
      )
      .then(function (response) {
        console.log(response.data.results);
        self.setState({
          title: response.data.results,
        });
      })
      .catch(function (error) {
        alert(error);
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="mapes">
          {this.state.title.map((item, index) => {
            return (
              <div key={index}>
                <MovieCard
                  title={item.title}
                  image={BASEIMAGE + item.poster_path}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
