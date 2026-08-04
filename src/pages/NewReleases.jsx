import React from 'react'
import Card from '../components/Card'
import SkeletonCard from '../components/SkeletonCard'

function NewReleases({songs}) {
  return (
     <div className="px-2 lg:pl-8 lg:pr-5 mt-20">
      {/* Top Charts */}
      <h2 className="text-3xl font-bold mb-6 lg:pl-10">
         New Releases
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-6 lg:pl-8">
        {songs.length === 0
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : songs.slice(6, 12).map((song) => (
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
        Evergreen Hits
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-6 lg:pl-8">
        {songs.length === 0
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : songs.slice(0, 6).map((song) => (
              <Card
                key={song._id}
                songName={song.title}
                image={song.image}
                audio={song.url}
              />
            ))}
      </div>
    </div>
  )
}

export default NewReleases


