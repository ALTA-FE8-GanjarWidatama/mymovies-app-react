import React, { Component } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MoviesCard";
import { withRouter } from "../withRouter";
import axios from "axios";

const BASEIMAGE = "https://image.tmdb.org/t/p/original";
class Home extends Component {
  state = {
    title: [],
    page: 1,
  };

  componentDidMount() {
    this.getData();
  }

  getData(page) {
    const self = this;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=6abe3c5cae209af53dc03ebaee318a77&language=en-US&page=${page}`
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
  handleDetailPage(item) {
    this.props.navigate("/detail", {
      state: {
        title: item.title,
        image: item.poster_path,
        popularity: item.popularity,
        lang: item.original_language,
        overview: item.overview,
        vote_count: item.vote_count,
        vote_average: item.vote_average,
        release_date: item.release_date,
      },
    });
  }
  previousPage() {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1,
      });
    }
    this.getData(this.state.page);
  }

  nextPage() {
    this.setState({
      page: this.state.page + 1,
    });
    this.getData(this.state.page);
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
                  klik={() => this.handleDetailPage(item)}
                  title={item.title}
                  image={BASEIMAGE + item.poster_path}
                  popularity={item.popularity}
                  overview={item.overview}
                  count={item.count}
                />
              </div>
            );
          })}
        </div>
        <div className="btn">
          <button onClick={(value) => this.previousPage(value)}>
            Previous
          </button>
          <button onClick={(value) => this.nextPage(value)}>Next</button>
        </div>
      </>
    );
  }
}

export default withRouter(Home);
