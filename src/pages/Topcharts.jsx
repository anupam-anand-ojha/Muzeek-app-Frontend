import React from 'react'
import Card from '../components/Card'
import { useEffect , useState} from 'react'

function TopCharts() {

  const [songs, setsongs] = useState([])

useEffect(() => {
      axios.get("https://anupam-music-api.onrender.com/api/music")
      .then(res => setSongs(res.data))
      .catch(err => console.log(err));
}, [])

  return (
    <div className="px20 my-20">

      <h1 className="text-3xl font-bold mb-6 px-20 my-20">
        Top Charts
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-20 my-20">
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
  )
}

export default TopCharts