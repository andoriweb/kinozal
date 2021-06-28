import React from 'react';
import {Movies} from '../components/Movies';
import {Preloader} from '../components/Preloader';

class Main extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('https://www.omdbapi.com/?apikey=9d5ae151&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  render() {
    const {movies} = this.state;

    return <main className="container content">
      {
        movies.length ? (
          <Movies movies = {this.state.movies} />
        ) : <Preloader />
      }
  </main>
  }
}

export {Main}