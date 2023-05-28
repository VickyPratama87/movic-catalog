const main = () => {
  const apiKey = "41c96d3cb03e3c4cd447754957e0c1f3";
  let trendingLink = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=en-US`;
  let upcomingLink = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US`;
  let topRatedLink = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`;
  let popularLink = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;
  let nowPlayingLink = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`;

  const getListMovie = async (link) => {
    try {
      const response = await fetch(`${link}`);
      const responseJson = await response.json();

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllMovies(responseJson.results);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const renderAllMovies = (movies) => {
    const listOfElement = document.getElementById("movie-list");
    listOfElement.innerHTML = "";

    movies.forEach((data) => {
      let title;
      let poster;
      if (!data.title || !data.poster_path) {
        title = data.name;
      } else {
        title = data.title;
      }

      if (!data.poster_path) {
        poster = data.backdrop_path;
      } else {
        poster = data.poster_path;
      }

      listOfElement.innerHTML += `
        <div class="card-movie">
          <div class="card-body">
            <div>
              <img src="https://image.tmdb.org/t/p/w500${poster}" />
              <h4>${title}</h4>
              <h6>Rating : ${data.vote_average}</h6>
            </div>

            <div class="description">
              <p>${data.overview}</p>
            </div>
          </div>
        </div>
      `;
    });
  };

  const showResponseMessage = (message = "Your internet is not connected") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const categoryTrendingElement = document.querySelector(".category-trending")
    const categoryUpcomingElement = document.querySelector(".category-upcoming")
    const categoryTopRatedElement = document.querySelector(".category-top-rated")
    const categoryPopularElement = document.querySelector(".category-popular")
    const categoryNowPlayingElement = document.querySelector(".category-now-playing")
    const trendingElement = document.querySelector("#trending");
    const upcomingElement = document.querySelector("#upcoming");
    const topRatedElement = document.querySelector("#top-rated");
    const popularElement = document.querySelector("#popular");
    const nowPlayingElement = document.querySelector("#now-playing");

    getListMovie(trendingLink);

    trendingElement.addEventListener("click", (e) => {
      e.preventDefault();
      getListMovie(trendingLink);
      categoryTrendingElement.style.backgroundColor = "#30A2FF"
      categoryUpcomingElement.style.backgroundColor = "#3ccf4e"
      categoryTopRatedElement.style.backgroundColor = "#3ccf4e"
      categoryPopularElement.style.backgroundColor = "#3ccf4e"
      categoryNowPlayingElement.style.backgroundColor = "#3ccf4e"
      trendingElement.style.color = "#000";
      upcomingElement.style.color = "#e0e7f7";
      topRatedElement.style.color = "#e0e7f7";
      popularElement.style.color = "#e0e7f7";
      nowPlayingElement.style.color = "#e0e7f7";
    });

    upcomingElement.addEventListener("click", (e) => {
      e.preventDefault();
      getListMovie(upcomingLink);
      categoryTrendingElement.style.backgroundColor = "#3ccf4e"
      categoryUpcomingElement.style.backgroundColor = "#30A2FF"
      categoryTopRatedElement.style.backgroundColor = "#3ccf4e"
      categoryPopularElement.style.backgroundColor = "#3ccf4e"
      categoryNowPlayingElement.style.backgroundColor = "#3ccf4e"
      upcomingElement.style.color = "#000";
      trendingElement.style.color = "#e0e7f7";
      topRatedElement.style.color = "#e0e7f7";
      popularElement.style.color = "#e0e7f7";
      nowPlayingElement.style.color = "#e0e7f7";
    });

    topRatedElement.addEventListener("click", (e) => {
      e.preventDefault();
      getListMovie(topRatedLink);
      categoryTrendingElement.style.backgroundColor = "#3ccf4e"
      categoryUpcomingElement.style.backgroundColor = "#3ccf4e"
      categoryTopRatedElement.style.backgroundColor = "#30A2FF"
      categoryPopularElement.style.backgroundColor = "#3ccf4e"
      categoryNowPlayingElement.style.backgroundColor = "#3ccf4e"
      topRatedElement.style.color = "#000";
      trendingElement.style.color = "#e0e7f7";
      upcomingElement.style.color = "#e0e7f7";
      popularElement.style.color = "#e0e7f7";
      nowPlayingElement.style.color = "#e0e7f7";
    });

    popularElement.addEventListener("click", (e) => {
      e.preventDefault();
      getListMovie(popularLink);
      categoryTrendingElement.style.backgroundColor = "#3ccf4e"
      categoryUpcomingElement.style.backgroundColor = "#3ccf4e"
      categoryTopRatedElement.style.backgroundColor = "#3ccf4e"
      categoryPopularElement.style.backgroundColor = "#30A2FF"
      categoryNowPlayingElement.style.backgroundColor = "#3ccf4e"
      popularElement.style.color = "#000";
      trendingElement.style.color = "#e0e7f7";
      upcomingElement.style.color = "#e0e7f7";
      topRatedElement.style.color = "#e0e7f7";
      nowPlayingElement.style.color = "#e0e7f7";
    });

    nowPlayingElement.addEventListener("click", (e) => {
      e.preventDefault();
      getListMovie(nowPlayingLink);
      categoryTrendingElement.style.backgroundColor = "#3ccf4e"
      categoryUpcomingElement.style.backgroundColor = "#3ccf4e"
      categoryTopRatedElement.style.backgroundColor = "#3ccf4e"
      categoryPopularElement.style.backgroundColor = "#3ccf4e"
      categoryNowPlayingElement.style.backgroundColor = "#30A2FF"
      nowPlayingElement.style.color = "#000";
      trendingElement.style.color = "#e0e7f7";
      upcomingElement.style.color = "#e0e7f7";
      topRatedElement.style.color = "#e0e7f7";
      popularElement.style.color = "#e0e7f7";
    });
  });
};

export default main;
