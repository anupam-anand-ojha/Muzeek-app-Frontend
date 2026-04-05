import React from "react";

function Card({ songName = "Song Title", image }) {
  return (
    <div className="card bg-base-200 w-full shadow-xl hover:bg-base-300 transition-all duration-300 cursor-pointer group">

      <figure className="px-4 pt-4 relative aspect-square overflow-hidden">
        <img
          src={image || "https://loremflickr.com/400/401/music"}
          alt={songName}
          className="rounded-xl w-full h-full object-cover"
        />

        {/* Play button */}
        <button className="btn btn-circle btn-primary absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition">
          ▶
        </button>
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-sm font-bold truncate">
          {songName}
        </h2>

        <p className="text-xs opacity-70">
          Trending Playlist
        </p>
      </div>

    </div>
  );
}

export default Card;