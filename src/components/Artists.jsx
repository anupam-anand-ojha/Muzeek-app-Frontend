import React from "react";

function Artists() {
  return (
    <div className="px-10 mt-16">

      <h2 className="text-2xl font-bold mb-6 pl-10">
        Top Artists
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

        {/* Artist 1 */}
        <div className="text-center cursor-pointer group">
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              className="w-36 h-36 rounded-full object-cover mx-auto shadow-lg"
            />

            <button className="btn btn-success btn-circle absolute bottom-2 right-8 opacity-0 group-hover:opacity-100 transition">
              ▶
            </button>

          </div>

          <h3 className="mt-3 font-semibold">
            Arijit Singh
          </h3>

          <p className="text-sm opacity-70">
            Bollywood
          </p>
        </div>


        {/* Artist 2 */}
        <div className="text-center cursor-pointer group">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce"
              className="w-36 h-36 rounded-full object-cover mx-auto shadow-lg"
            />

            <button className="btn btn-success btn-circle absolute bottom-2 right-8 opacity-0 group-hover:opacity-100 transition">
              ▶
            </button>
          </div>

          <h3 className="mt-3 font-semibold">
            Badshah
          </h3>

          <p className="text-sm opacity-70">
            Rap
          </p>
        </div>


        {/* Artist 3 */}
        <div className="text-center cursor-pointer group">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
              className="w-36 h-36 rounded-full object-cover mx-auto shadow-lg"
            />

            <button className="btn btn-success btn-circle absolute bottom-2 right-8 opacity-0 group-hover:opacity-100 transition">
              ▶
            </button>
          </div>

          <h3 className="mt-3 font-semibold">
            Neha Kakkar
          </h3>

          <p className="text-sm opacity-70">
            Pop
          </p>
        </div>


        {/* Artist 4 */}
        <div className="text-center cursor-pointer group">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              className="w-36 h-36 rounded-full object-cover mx-auto shadow-lg"
            />

            <button className="btn btn-success btn-circle absolute bottom-2 right-8 opacity-0 group-hover:opacity-100 transition">
              ▶
            </button>
          </div>

          <h3 className="mt-3 font-semibold">
            AP Dhillon
          </h3>

          <p className="text-sm opacity-70">
            Punjabi
          </p>
        </div>


        {/* Artist 5 */}
        <div className="text-center cursor-pointer group">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
              className="w-36 h-36 rounded-full object-cover mx-auto shadow-lg"
            />

            <button className="btn btn-success btn-circle absolute bottom-2 right-8 opacity-0 group-hover:opacity-100 transition">
              ▶
            </button>
          </div>

          <h3 className="mt-3 font-semibold">
            Armaan Malik
          </h3>

          <p className="text-sm opacity-70">
            Indie
          </p>
        </div>


        {/* Artist 6 */}
        <div className="text-center cursor-pointer group">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
              className="w-36 h-36 rounded-full object-cover mx-auto shadow-lg"
            />

            <button className="btn btn-success btn-circle absolute bottom-2 right-8 opacity-0 group-hover:opacity-100 transition">
              ▶
            </button>
          </div>

          <h3 className="mt-3 font-semibold">
            Shreya Ghoshal
          </h3>

          <p className="text-sm opacity-70">
            Classical
          </p>
        </div>

      </div>

    </div>
  );
}

export default Artists;