import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

function Herocard({ songs }) {
  return (
    <div className="pl-8">
      {/* Top Charts */}
      <h2 className="text-3xl font-bold mt-20 mb-6 px-8">
        Top Charts
      </h2>

      <div className="flex overflow-hidden gap-6 px-8 scrollbar-hide">
        {songs.length === 0
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : songs.slice(7, 13).map((song) => (
              <Card
                key={song._id}
                songName={song.title}
                image={song.image}
                audio={song.url}
              />
            ))}
      </div>

      {/* New Releases */}
      <h2 className="text-3xl font-bold mt-20 mb-6 px-8">
        New Releases
      </h2>

      <div className="flex overflow-hidden gap-6 px-8 scrollbar-hide">
        {songs.length === 0
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : songs.slice(1, 7).map((song) => (
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

export default Herocard;