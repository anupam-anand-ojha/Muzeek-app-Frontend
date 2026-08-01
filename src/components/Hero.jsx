import Card from "./Card"

function Hero() {
  return (
    <div className="w-full overflow-hidden  my-20 pl-14 pr-5">

      <div className="carousel flex rounded-box  overflow-x-auto whitespace-nowrap">

        <div className="carousel-item w-[300px] h-[400px] overflow-hidden flex-shrink-0">
          <img
            src="https://plus.unsplash.com/premium_vector-1726856108296-3efe91184a8e?w=400&auto=format&fit=crop&q=70"
            alt="Drink"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="carousel-item w-[300px] h-[400px] overflow-hidden flex-shrink-0">
          <img
            src="https://plus.unsplash.com/premium_vector-1727106645357-0d4150efe6ad?w=400&auto=format&fit=crop&q=70"
            alt="Drink"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="carousel-item w-[300px] h-[400px] overflow-hidden flex-shrink-0">
          <img
            src="https://plus.unsplash.com/premium_vector-1713178049236-75d11f431d31?w=400&auto=format&fit=crop&q=70"
            alt="Drink"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="carousel-item w-[300px] h-[400px] overflow-hidden flex-shrink-0">
          <img
            src="https://plus.unsplash.com/premium_vector-1726893070631-495780b30b95?w=400&auto=format&fit=crop&q=70"
            alt="Drink"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="carousel-item w-[300px] h-[400px] overflow-hidden flex-shrink-0">
          <img
            src="https://plus.unsplash.com/premium_vector-1746172212957-653edde7796b?w=400&auto=format&fit=crop&q=70"
            alt="Drink"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="carousel-item w-[300px] h-[400px] overflow-hidden flex-shrink-0">
          <img
            src="https://plus.unsplash.com/premium_vector-1726555819856-acea14d4d1e3?w=400&auto=format&fit=crop&q=70"
            alt="Drink"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="carousel-item w-[300px] h-[400px] overflow-hidden flex-shrink-0">
          <img
            src="https://plus.unsplash.com/premium_vector-1726835804061-6cf4c5e6fd82?w=400&auto=format&fit=crop&q=70"
            alt="Drink"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  )
}

export default Hero