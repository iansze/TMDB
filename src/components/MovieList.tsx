import { useQuery } from "@tanstack/react-query";
import { instance } from "../utils/axios";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { Movie } from "../types/type";

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

  if (isLoading) return <div>Loading...</div>;
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
        grabCursor={true}
        className="mySwiper"
        breakpoints={sliderBreakPoint}
      >
        {moviesList.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <div
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                }")`,
                height: "150px",
              }}
              className="hover: bg-cover bg-center object-contain  hover:scale-110  hover:duration-300 "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
