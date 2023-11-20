import Banner from "../components/Banner";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import { requests } from "../utils/axios";

const movieCategories = [
  {
    title: "Trending",
    fetchUrl: requests.fetchTrending,
    fetchKey: "trending",
  },
  {
    title: "Netflix Originals",
    fetchUrl: requests.fetchNetflixOriginals,
    fetchKey: "netflixOriginals",
  },
  {
    title: "Top Rated",
    fetchUrl: requests.fetchTopRated,
    fetchKey: "topRated",
  },
  {
    title: "Action Movies",
    fetchUrl: requests.fetchActionMovies,
    fetchKey: "actionMovie",
  },
  {
    title: "Comedy Movies",
    fetchUrl: requests.fetchComedyMovies,
    fetchKey: "comedyMovie",
  },
  {
    title: "Horror Movies",
    fetchUrl: requests.fetchHorrorMovies,
    fetchKey: "horrorMovie",
  },
  {
    title: "Romance Movies",
    fetchUrl: requests.fetchRomanceMovies,
    fetchKey: "romanceMovie",
  },
  {
    title: "Documentaries",
    fetchUrl: requests.fetchDocumentaries,
    fetchKey: "documentMovie",
  },
];

const MoviePage = () => {
  return (
    <div className="bg-black">
      <Header />
      <Banner />
      {movieCategories.map((category) => (
        <MovieList
          key={category.fetchKey}
          title={category.title}
          fetchUrl={category.fetchUrl}
          fetchKey={category.fetchKey}
        />
      ))}
    </div>
  );
};

export default MoviePage;
