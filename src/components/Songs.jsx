import Card from "./Card";
import SkeletonCard from "./SkeletonCard.jsx";
import { useNavigate } from "react-router-dom";

function Songs({ songs }) {
  const navigate = useNavigate();

  return (
    <div className="px-2 lg:pl-8 lg:pr-5 mt-20">
      <div className="flex justify-between items-center mb-6 lg:pl-10">
        <h2 className="text-3xl font-bold">Songs</h2>

        <button
          onClick={() => navigate("/all-songs")}
          className="text-sm text-gray-400 hover:text-white"
        >
          See All
        </button>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-6 lg:pl-8">
        {/*  12 song only */}
        {songs.length === 0
          ? Array.from({ length: 12 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : songs.slice(0, 12).map((song) => (
                <Card
                  key={song._id}
                  songName={song.title}
                  image={song.image}
                  audio={song.url}
                />
              ))}
      </div>
    </div>
  );
}

export default Songs;
