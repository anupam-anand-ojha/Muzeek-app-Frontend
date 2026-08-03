import React from "react";

function Hero() {
  const banners = [
    "https://plus.unsplash.com/premium_vector-1726835804061-6cf4c5e6fd82?w=600&auto=format&fit=crop&q=80",
    "https://plus.unsplash.com/premium_vector-1727106645357-0d4150efe6ad?w=600&auto=format&fit=crop&q=80",
    "https://plus.unsplash.com/premium_vector-1713178049236-75d11f431d31?w=600&auto=format&fit=crop&q=80",
    "https://plus.unsplash.com/premium_vector-1726893070631-495780b30b95?w=600&auto=format&fit=crop&q=80",
    "https://plus.unsplash.com/premium_vector-1746172212957-653edde7796b?w=600&auto=format&fit=crop&q=80",
    "https://plus.unsplash.com/premium_vector-1726555819856-acea14d4d1e3?w=600&auto=format&fit=crop&q=80",
    "https://plus.unsplash.com/premium_vector-1726835804061-6cf4c5e6fd82?w=600&auto=format&fit=crop&q=80",
  ];

  return (
    <div className="w-full mt-20 px-3 lg:px-5 overflow-hidden">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">

        {banners.map((banner, index) => (
          <div
            key={index}
            className="flex-none w-[220px] h-[300px] sm:w-[260px] sm:h-[350px] lg:w-[300px] lg:h-[400px] rounded-xl overflow-hidden"
          >
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

      </div>
    </div>
  );
}

export default Hero;