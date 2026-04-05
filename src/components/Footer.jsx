import React from 'react'

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content pl-20 mt-10 py-30">

  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current">
      <path d="M12 3v12.55a4 4 0 1 0 2 3.45V7h4V3h-6z" />
    </svg>

    <p>
      MUZEEK
      <br />
      Stream music, discover artists, and create your own sound.
      <br />
      Built for music lovers & creators.
    </p>
  </aside>

  <nav>
    <h6 className="footer-title">Discover</h6>
    <a className="link link-hover">Trending Songs</a>
    <a className="link link-hover">Top Artists</a>
    <a className="link link-hover">New Releases</a>
    <a className="link link-hover">Playlists</a>
  </nav>

  <nav>
    <h6 className="footer-title">For Artists</h6>
    <a className="link link-hover">Artist Login</a>
    <a className="link link-hover">Upload Music</a>
    <a className="link link-hover">Artist Dashboard</a>
    <a className="link link-hover">Grow Your Audience</a>
  </nav>

  <nav>
    <h6 className="footer-title">Support</h6>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Feedback</a>
  </nav>

  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Copyright</a>
  </nav>

</footer>
  )
}

export default Footer