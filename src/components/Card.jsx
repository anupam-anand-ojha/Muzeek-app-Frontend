import React, { useState } from "react";

let currentAudio = null;

function Card({
  songName,
  image = "https://plus.unsplash.com/premium_vector-1727360201453-3c88c322a322?w=300&auto=format&fit=crop&q=70",
  audio,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [music, setMusic] = useState(null);

  const handlePlayPause = () => {
    if (!music) {
      if (currentAudio) currentAudio.pause();

      const newMusic = new Audio(audio);
      newMusic.play();

      currentAudio = newMusic;
      setMusic(newMusic);
      setIsPlaying(true);
    } else {
      if (isPlaying) {
        music.pause();
        setIsPlaying(false);
      } else {
        if (currentAudio && currentAudio !== music) {
          currentAudio.pause();
        }

        music.play();
        currentAudio = music;
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="card bg-base-200 w-full shadow-xl hover:bg-base-300 transition-all duration-300 cursor-pointer group">
      <figure className="px-4 pt-4 relative aspect-square overflow-hidden">
        <img
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          src={image}
          alt={songName}
          className="rounded-xl w-full h-full object-cover"
        />

        <button
          onClick={handlePlayPause}
          className="btn btn-circle btn-primary absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-sm font-bold truncate">{songName}</h2>
      </div>
    </div>
  );
}

export default Card;
