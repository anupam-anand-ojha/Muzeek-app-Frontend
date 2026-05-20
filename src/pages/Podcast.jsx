import React from 'react'

function Podcast() {
  return (
   <div className='h-screen overflow-hidden bg-cover bg-center bg-no-repeat'style={{ backgroundImage: "url(https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1740&auto=format&fit=crop)" }}>
    <div className="px-20 my-20">

      <h1 className="text-4xl font-bold text-zinc-100 mb-6 ">
        Podcasts
      </h1>

      <ul className="list-disc ml-6 text-lg text-white/70">

      <li>Tech Talks Daily</li>
      <li>Startup Stories</li>
      <li>Motivation with Sandeep</li> 
      <li>History Explained</li>
      <li>Tech Talks Daily</li>
      <li>Startup Stories</li>
      <li>Motivation with Sandeep</li>
      <li>History Explained</li>

      <li>Music Vibes Podcast</li>
      <li>Behind The Beats</li>
      <li>Indie Artist Spotlight</li>
      <li>Sound Stories</li>
      <li>Rhythm & Talks</li>
      <li>Melody Makers</li>
      <li>Studio Sessions</li>
      <li>The Music Hustle</li>
      <li>Lyrics & Life</li>
      <li>Desi Music Diaries</li>
      <li>Lo-Fi Talks</li>
      <li>Beat Breakdown</li>
      <li>Voices of Music</li>
  

      </ul>

    </div>
    </div>
    
  )
}

export default Podcast