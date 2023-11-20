import { useQuery } from "@tanstack/react-query";
import { instance, requests } from "../utils/axios";

const Banner = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["trending"],
    queryFn: () => instance.get(requests.fetchTrending),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  const moviesList = data?.data.results;

  const randomMoive = moviesList[Math.floor(Math.random() * moviesList.length)];

  return (
    <header
      className={`relative z-20  h-[400px] bg-cover bg-center object-contain`}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${randomMoive?.backdrop_path}")`,
      }}
    >
      <div className="ml-[30px] h-[140px] pt-[140px]">
        <h1 className="pb-1 text-5xl font-extrabold text-white">
          {randomMoive.original_title || randomMoive.name}
        </h1>
        <div className="mt-4 flex gap-2">
          <button className="border-1 rounded bg-slate-800 px-6 py-1 font-bold text-white hover:bg-slate-100 hover:text-black hover:transition-colors">
            Play
          </button>
          <button className="border-1 rounded bg-slate-800 px-6 py-1 font-bold text-white hover:bg-slate-100 hover:text-black hover:transition-colors">
            List
          </button>
        </div>
        <h1 className="line-clamp-3 h-[80px] w-[45rem] max-w-[360px] pt-4 text-sm text-white">
          {randomMoive.overview}
        </h1>
      </div>
      <div className="bg-tmdb-banner-fade absolute bottom-0 h-[50px] w-full"></div>
    </header>
  );
};

export default Banner;
