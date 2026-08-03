import React from "react";

function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Brand */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-extrabold">MUZEEK ♪</h2>
          <p className="mt-3 text-sm opacity-70 max-w-md mx-auto lg:mx-0">
            Stream music, discover artists, and create your own sound.
            Built for music lovers & creators.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

          <div>
            <h3 className="font-bold mb-3">Discover</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a className="hover:text-primary">Trending Songs</a></li>
              <li><a className="hover:text-primary">Top Artists</a></li>
              <li><a className="hover:text-primary">New Releases</a></li>
              <li><a className="hover:text-primary">Playlists</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Artists</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a className="hover:text-primary">Artist Login</a></li>
              <li><a className="hover:text-primary">Upload Music</a></li>
              <li><a className="hover:text-primary">Dashboard</a></li>
              <li><a className="hover:text-primary">Audience</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Support</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a className="hover:text-primary">Help Center</a></li>
              <li><a className="hover:text-primary">Contact</a></li>
              <li><a className="hover:text-primary">Community</a></li>
              <li><a className="hover:text-primary">Feedback</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a className="hover:text-primary">Terms</a></li>
              <li><a className="hover:text-primary">Privacy</a></li>
              <li><a className="hover:text-primary">Copyright</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-base-300 mt-10 pt-6 text-center text-xs opacity-60">
          © 2026 MUZEEK. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;