import Preloader from '../components/Preloader';
import { Component } from 'react';
import Details from '../components/Details';
import routes from '../routes';
import fetchAPI from '../utils/fetchAPI';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await this.fetchMovieById(movieId);
  }

  fetchMovieById = async movieId => {
    try {
      const response = await fetchAPI.fetchById(movieId);

      if (response.ok) {
        const movie = await response.json();
        return this.setState({ movie, isLoading: false });
      }
      return Promise.reject(
        new Error(`Something went wrong.`),
      );
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.homePage);
  };

  render() {
    const { state } = this.props.location;
    const { url, path } = this.props.match;
    const { movie, isLoading, error } = this.state;
    return (
      <>
        {isLoading ?
          (<Preloader />) :
          (movie &&
            (<Details
              movie={movie}
              url={url}
              path={path}
              locationState={state}
              handleGoBack={this.handleGoBack}
            />
            ))}
        {error && <h1>{error}</h1>}
      </>
    );
  }
}

export default MovieDetailsPage;
