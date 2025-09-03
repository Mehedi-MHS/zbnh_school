

const NewsAndEvents = () => {
  // Sample news data - replace with your actual data
  const newsItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
      title: "Annual Science Fair Winners Announced",
      date: "March 15, 2024"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop",
      title: "New Library Wing Opens to Students",
      date: "March 10, 2024"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop",
      title: "Basketball Team Advances to Regional Finals",
      date: "March 8, 2024"
    }
  ];

  return (
    <div className="container grid gap-6 w-full py-10 px-4 bg-green-50 grid-cols-1 md:grid-cols-12">
    <section className="md:col-span-8">
      <div className="max-w-7xl mx-auto">
        {/* News Title with Designed Underline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            News & Events
          </h2>
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <article 
              key={news.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* News Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* News Content */}
              <div className="p-6">
                {/* Date */}
                <p className="text-sm text-gray-500 mb-2 font-medium">
                  {news.date}
                </p>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {news.title}
                </h3>
                
                {/* Read More Button */}
                <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/btn">
                  Read More
                  <svg 
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Optional: View All News Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            View All News
          </button>
        </div>
      </div>
    </section>
    {/*School page iframe */}
<section className="md:col-span-4 w-full h-full">
   <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 ">
           Our Facebook Page
          </h2>
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
<iframe 
  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJamidarhat.bn.school&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
  width="400" 
  height="400" 
  style={{
    border: "none",
    overflow: "hidden"
  }} 
  allowFullScreen={true} 
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  title="Facebook Page"
/>
</section>
    </div>
  );
};

export default NewsAndEvents;