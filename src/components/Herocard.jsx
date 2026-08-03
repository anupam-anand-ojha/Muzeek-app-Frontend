import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

function Herocard({ songs }) {
  return (
    <div className="pl-8 pr-5 mt-20">
      {/* Top Charts */}
      <h2 className="text-3xl font-bold mb-6 lg:pl-10">
        Top Charts
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-6 lg:pl-8">
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
      <h2 className="text-3xl font-bold mt-20 mb-6 lg:pl-10">
        New Releases
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-6 lg:pl-8">
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