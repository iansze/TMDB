import { useQuery } from "@tanstack/react-query";
import { instance } from "../utils/axios";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { Movie } from "../types/type";
import { useState } from "react";
import MovieDetailPage from "../pages/MovieDetailPage";
import { Backdrop } from "@mui/material";
import Loading from "../UI/Loading";

type MovieListProps = {
  title: string;
  fetchUrl: string;
  fetchKey: string;
};

const MovieList = ({ title, fetchUrl, fetchKey }: MovieListProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [{ fetchKey }],
    queryFn: () => instance.get(fetchUrl),
  });

  const [selectedMovie, setSelectedMovie] = useState<Movie>(null!);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModalWithMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (isLoading) return <Loading open={isLoading} />;
  if (isError) return <div>Error occurred</div>;

  const moviesList = data?.data.results;
  const sliderBreakPoint = {
    600: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1500: {
      slidesPerView: 6,
    },
    1800: {
      slidesPerView: 7,
    },
  };

  return (
    <div className="">
      <h1 className="py-2 pl-1 text-white">{title}</h1>
      <Swiper
        modules={[Mousewheel]}
        mousewheel
        slidesPerView={2}
        className="mySwiper"
        breakpoints={sliderBreakPoint}
      >
        {moviesList.map((movie: Movie) => (
          <SwiperSlide key={movie.id} onClick={() => openModalWithMovie(movie)}>
            <div
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                }")`,
                height: "150px",
              }}
              className="hover: cursor-pointer bg-cover bg-center object-contain hover:scale-110  hover:duration-300 "
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isModalOpen && (
        <Backdrop
          open={isModalOpen}
          onClick={handleCloseModal}
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <MovieDetailPage movie={selectedMovie} />
        </Backdrop>
      )}
    </div>
  );
};

export default MovieList;
