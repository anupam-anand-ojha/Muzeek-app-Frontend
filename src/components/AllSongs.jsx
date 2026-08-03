import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

function AllSongs({ songs }) {
  return (
    <div className="lg:pl-8">
      <div className="lg:pl-8 lg:pr-5 mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">All Songs</h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-6">
          {songs.length === 0
            ? Array.from({ length: 12 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : songs.map((song) => (
                <Card
                  key={song._id}
                  songName={song.title}
                  image={song.image}
                  audio={song.url}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default AllSongs;
