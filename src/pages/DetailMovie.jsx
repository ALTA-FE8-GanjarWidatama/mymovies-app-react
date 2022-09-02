import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { withRouter } from "../withRouter";

class DetailMovie extends Component {
  // state = {
  //   overview: [],
  // };

  // componentDidMount() {
  //   const self = this;
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/now_playing?api_key=6abe3c5cae209af53dc03ebaee318a77&language=en-US&page=1`
  //     )
  //     .then(function (response) {
  //       console.log(response.data.results);
  //       self.setState({
  //         overview: response.data.results,
  //       });
  //     })
  //     .catch(function (error) {
  //       alert(error);
  //     });
  // }
  render() {
    return (
      <>
        <Navbar />
        <div className="mapes2">
          <div>
            <p>{this.props.location.state.title}</p>
            <img
              src={
                this.props.location.state.image
                  ? "https://image.tmdb.org/t/p/original/" +
                    this.props.location.state.image
                  : "https://via.placeholder.com/500x750.png/000000/FFFFFF/%20C/O%20https://placeholder.com/?text=No+image"
              }
              alt="wahyu why"
            />
            <p>{this.props.location.state.popularity}</p>
            <p>{this.props.location.state.overview}</p>
            <p>{this.props.location.state.vote_count}</p>
            <p>{this.props.location.state.vote_average}</p>
            <p>{this.props.location.state.release_date}</p>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(DetailMovie);
