import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Herocard() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get(
          "https://anupam-music-api.onrender.com/api/music"
        );

        setSongs(res.data);
      } catch (err) {
        console.log(err);

      //retry 
        setTimeout(fetchSongs, 3000);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="pl-8">
      {/* Top Charts */}
      <h2 className="text-3xl font-bold mt-20 mb-6 px-8">
        Top Charts
      </h2>

      <div className="flex overflow-hidden gap-6 px-8 scrollbar-hide">
        {songs.slice(7, 13).map((song) => (
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
        {songs.slice(1, 7).map((song) => (
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