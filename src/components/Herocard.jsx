import React from 'react'
import Card from './Card'
function Herocard() {
  return (
<div className='pl-8'>
      <h2 className="text-3xl font-bold mt-20 mb-6 px-8">
Top Charts
</h2>

<div className="cards grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 pl-8 pr-5">
  <Card songName="Global Top 50"/>
  <Card songName="India Top 50"/>
  <Card songName="Viral Hits"/>
  <Card songName="Trending Now"/>
  <Card songName="Top Indie"/>
  <Card songName="Top Punjabi"/>
</div>


<h2 className="text-3xl font-bold mt-20 mb-6 px-8">
New Releases
</h2>

<div className="cards grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 pl-8 pr-5 my-5">
  <Card songName="Latest Bollywood"/>
  <Card songName="Fresh Indie"/>
  <Card songName="New Punjabi"/>
  <Card songName="Latest Remix"/>
  <Card songName="Hip Hop Drop"/>
  <Card songName="Brand New"/>
</div>
</div>
  )
}

export default Herocard