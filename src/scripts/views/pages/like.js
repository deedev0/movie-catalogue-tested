import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import FavoriteMovieSearchPresenter from './favorite-movie-search-presenter';
import FavoriteMovieShowPresenter from './liked-movies/favorite-movie-show-presenter';
// import { createMovieItemTemplate } from '../templates/template-creator';
import FavoriteMovieView from './liked-movies/favorite-movie-view';

const view = new FavoriteMovieView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // const movies = await FavoriteMovieIdb.getAllMovies();
    // const moviesContainer = document.querySelector('#movies');
    // movies.forEach((movie) => {
    //   moviesContainer.innerHTML += createMovieItemTemplate(movie);
    // });
    new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovieIdb });
    new FavoriteMovieSearchPresenter({ view, favoriteMovies: FavoriteMovieIdb });
  },
};

export default Like;
