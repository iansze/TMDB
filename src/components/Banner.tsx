import { useQuery } from "@tanstack/react-query";
import { instance, requests } from "../utils/axios";
import Loading from "../UI/Loading";

const Banner = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["trending"],
    queryFn: () => instance.get(requests.fetchTrending),
  });

  if (isLoading) return <Loading open={isLoading} />;
  if (isError) return <div>Error occurred</div>;

  const moviesList = data?.data.results;

  const randomMoive = moviesList[Math.floor(Math.random() * moviesList.length)];

  return (
    <div className="relative">
      <div className="bg-dark-gradient-left absolute top-0 z-30 h-full w-full"></div>
      <div className="absolute bottom-0 z-30 h-[50px] w-full bg-tmdb-banner-fade" />
      <header
        className={` relative  z-20 h-[400px] bg-cover bg-center object-contain`}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${randomMoive?.backdrop_path}")`,
        }}
      />
      <div className="absolute top-[30%] z-40 ml-[30px] h-[140px] text-white ">
        <h1 className=" pb-1 text-5xl font-extrabold ">
          {randomMoive.original_title || randomMoive.name}
        </h1>
        <div className="z-40  mt-4 flex gap-2">
          <button className="border-1 rounded bg-slate-800 px-6 py-1 font-bold  hover:bg-slate-100 hover:text-black hover:transition-colors">
            Play
          </button>
          <button className="border-1 rounded bg-slate-800 px-6 py-1 font-bold  hover:bg-slate-100 hover:text-black hover:transition-colors">
            List
          </button>
        </div>
        <h2 className="line-clamp-3 h-[80px] w-[45rem] max-w-[360px] pt-4 text-sm ">
          {randomMoive.overview}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
//<div className="bg-dark-gradient-left absolute top-0 z-10 h-full w-full"></div>
//<div className="absolute bottom-0 z-10 h-[50px] w-full bg-tmdb-banner-fade" />
