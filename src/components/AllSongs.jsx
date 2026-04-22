import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

function AllSongs() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get("https://anupam-music-api.onrender.com/api/music") 
      .then(res => setSongs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="pl-8 pr-5 mt-20">
      <h2 className="text-3xl font-bold mb-6">All Songs</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
  );
}

export default AllSongs;