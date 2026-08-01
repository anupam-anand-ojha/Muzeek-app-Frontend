import Card from "./Card";
import axios from "axios";

function AllSongs({songs}) {
  return (
    <div className="pl-8">
    <div className="pl-8 pr-5 mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">All Songs</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {songs.map((song) => (
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