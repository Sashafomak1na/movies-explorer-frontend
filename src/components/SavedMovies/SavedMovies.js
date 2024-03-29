import React, { useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { mainApi } from "../../utils/MainApi";
import { searchAndFilterMovies } from "../../utils/utils";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = () => {
  const [savesMovies, setSavesMovies] = useState(setInitMovies());
  const [searchQuery, setSearchQuery] = useState("");
  const [shortFilm, setShortFilm] = useState(false);

  function setInitMovies() {
    return localStorage.getItem("savesMovies")
      ? JSON.parse(localStorage.getItem("savesMovies"))
      : [];
  }

  useEffect(() => {
    if (!localStorage.getItem("savesMovies"))
      mainApi
        .getMovies(localStorage.getItem("jwt"))
        .then((res) => {
          setSavesMovies(res);
          localStorage.getItem("savesMovies", JSON.stringify(res));
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  // useEffect(() => {
  //   const jwt = localStorage.getItem("jwt");
  //   mainApi
  //     .getMovies(jwt)
  //     .then((res) => {
  //       setSavesMovies(res);
  //       localStorage.setItem("savesMovies", JSON.stringify(res));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  function handleSearch() {
    const store = localStorage.getItem("savesMovies");
    if (store) {
      setSavesMovies(JSON.parse(store));
      const filterMoviesArray = searchAndFilterMovies(
        JSON.parse(store),
        searchQuery,
        shortFilm
      );
      setSavesMovies(filterMoviesArray);
    }
  }

  function handleCheckBox(evt) {
    const value = evt.target.checked;
    setShortFilm(value);

    const store = JSON.parse(localStorage.getItem("savesMovies"));
    if (store) {
      const filterMoviesArray = searchAndFilterMovies(
        store,
        searchQuery,
        value
      );
      setSavesMovies(filterMoviesArray);
    }
  }

  function handleDeleteMovie(movieId) {
    const jwt = localStorage.getItem("jwt");
    mainApi
      .deleteMovie(movieId, jwt)
      .then(() => {
        const findMovieById = savesMovies.filter(
          (movie) => movie._id !== movieId
        );
        setSavesMovies(findMovieById);
        const findSaveMovieById = JSON.parse(
          localStorage.getItem("savesMovies")
        ).filter((item) => item._id !== movieId);
        localStorage.setItem("savesMovies", JSON.stringify(findSaveMovieById));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className="saved-movies">
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setInitMovies={setInitMovies}
        shortFilm={shortFilm}
        handleCheckBox={handleCheckBox}
        handleSearch={handleSearch}
        
      />
      <MoviesCardList
        movies={savesMovies}
        handleDeleteMovie={handleDeleteMovie}
      />
      <div className="saved-movies__line-area"></div>
    </section>
  );
};

export default SavedMovies;
