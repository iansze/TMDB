import Modal from "../UI/Modal";
import { Movie } from "../types/type";

type MovieDetailPageProps = {
  movie: Movie;
};

const MovieDetailPage = ({ movie }: MovieDetailPageProps) => {
  return (
    <Modal>
      <div
        className="relative max-h-fit min-h-[700px] bg-cover bg-center object-contain text-white"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        }}
      >
        {/* Gradient overlay */}
        <div className="bg-dark-gradient-bottom absolute h-full w-full" />
        {/* Gradient overlay */}
        <div className="bg-dark-gradient-left absolute h-full w-full" />
        {/* Content */}
        <div className="z-30  flex flex-col gap-6 p-6">
          <div className="z-30  flex items-center">
            <h1 className="mr-4 text-5xl">
              {movie.original_name || movie.title}
            </h1>
            <svg
              className="h-10 w-10 rounded-lg fill-red-400 stroke-red-400"
              viewBox="0 0 60 60"
            >
              <path d="m45.563 29.174-22-15A1 1 0 0 0 22 15v30a.999.999 0 0 0 1.563.826l22-15a1 1 0 0 0 0-1.652zM24 43.107V16.893L43.225 30 24 43.107z" />
              <path d="M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.561 58 2 45.439 2 30S14.561 2 30 2s28 12.561 28 28-12.561 28-28 28z" />
            </svg>
          </div>
          <div className="z-30 flex items-center gap-4 text-2xl">
            <h2 className="">
              <span className="mr-1  text-green-400">
                {Math.round(movie.vote_average * 10) / 10}
              </span>
              / 10
            </h2>
            <h2 className="">
              {movie.first_air_date?.slice(0, 4) ||
                movie.release_date?.slice(0, 4)}
            </h2>
            <h2 className="border bg-slate-700 px-0.5 text-xl">HD</h2>
            <h2 className="border bg-slate-700 px-0.5 text-xl">5.1</h2>
          </div>
          <div className="z-30 md:w-5/6 lg:w-9/12 xl:w-1/2">
            <h3 className=" text-xl">{movie.overview}</h3>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MovieDetailPage;
