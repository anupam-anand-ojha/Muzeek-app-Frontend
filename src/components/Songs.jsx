import Card from "./Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Songs() {
  const [songs, setSongs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await API.get("/api/music");
        setSongs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSongs();
  }, []);

  return (
    <div className="pl-8 pr-5 mt-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pl-10">
        <h2 className="text-3xl font-bold">Songs</h2>
        <button
          onClick={() => navigate("/all-songs")}
          className="text-sm text-gray-400 hover:text-white"
        >
          See All
        </button>
      </div>

      {/* Only 12 Songs */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 pl-8">
        {songs.slice(0, 12).map((song) => (
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
