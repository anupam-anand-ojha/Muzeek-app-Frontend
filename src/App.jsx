import "./App.css";
import ArtistLogin from "./components/ArtistLogin";
import Artists from "./components/Artists";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Herocard from "./components/Herocard";
import Navbar from "./components/Navbar";
import Songs from "./components/Songs";
import AllSongs from "./components/AllSongs";
import UploadMusic from "./components/UploadMusic";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Trending from "./pages/Trending";
import Library from "./pages/Library";
import NewReleases from "./pages/NewReleases";
import TopCharts from "./pages/Topcharts";
import Podcast from "./pages/Podcast";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import API from "./api/axios";
import { useEffect, useState } from "react";

function Home({ songs }) {

  return (
    <>
      <Hero />
      <Herocard songs={songs} />
      <ArtistLogin />
      <Artists />
      <Songs songs={songs} />
      <Footer />
    </>
  );
}

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await API.get("/api/music");
        setSongs(res.data);
      } catch (err) {
        console.log("Failed to fetch songs", err);
      }
    };
    fetchSongs();
  }, []);

  return (
    
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home songs={songs} />} />
          <Route path="/Trending" element={<Trending songs={songs} />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/NewReleases" element={<NewReleases songs={songs}/>} />
          <Route path="/TopCharts" element={<TopCharts songs={songs} />} />
          <Route path="/Podcast" element={<Podcast />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/upload" element={<UploadMusic />} />
          <Route path="/artistlogin" element={<ArtistLogin />} />
          <Route path="/all-songs" element={<AllSongs songs={songs} />} />
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
