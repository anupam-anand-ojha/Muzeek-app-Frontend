import Card from "./Card"

function Songs() {
  return (
  <div className="cards grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 pl-15 mt-20 pr-5">
  <Card songName="Relax songs"/>
  <Card songName="Arijit Hits"/>
  <Card songName="Workout Mix"/>
  <Card songName="LoFi Beats"/>
  <Card songName="Top Bollywood"/>
  <Card songName="Party Songs"/>
  <Card songName="Sad Songs"/>
  <Card songName="Romantic Hits"/>
  <Card songName="Indie India"/>
  <Card songName="Punjabi Beats"/>
  <Card songName="90s Hits"/>
  <Card songName="Chill Vibes"/>
</div>
   
  )
}

export default Songs