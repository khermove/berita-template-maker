
import { Clock, Eye } from "lucide-react";

const HeroSection = () => {
  const featuredNews = {
    title: "Pemerintah Umumkan Kebijakan Baru Untuk Mendorong Ekonomi Digital Indonesia",
    summary: "Menteri Komunikasi dan Informatika mengumumkan serangkaian kebijakan baru yang bertujuan untuk mempercepat transformasi digital di Indonesia dan meningkatkan daya saing ekonomi digital.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    category: "Teknologi",
    time: "2 jam yang lalu",
    views: "15.2K"
  };

  const sideNews = [
    {
      title: "Inflasi Indonesia Turun ke Level Terendah dalam 6 Bulan Terakhir",
      category: "Ekonomi",
      time: "3 jam yang lalu",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=120&fit=crop"
    },
    {
      title: "Tim Nasional Indonesia Lolos ke Semifinal Piala Asia",
      category: "Olahraga", 
      time: "4 jam yang lalu",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=200&h=120&fit=crop"
    },
    {
      title: "Peluncuran Satelit Komunikasi Terbaru Indonesia Sukses",
      category: "Teknologi",
      time: "5 jam yang lalu", 
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=120&fit=crop"
    }
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Featured Article */}
      <div className="lg:col-span-2">
        <div className="relative group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={featuredNews.image} 
              alt={featuredNews.title}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-3">
                {featuredNews.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {featuredNews.title}
              </h1>
              <p className="text-gray-200 mb-4 line-clamp-2">
                {featuredNews.summary}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{featuredNews.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{featuredNews.views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Articles */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground mb-4">Berita Terkini</h2>
        {sideNews.map((news, index) => (
          <div key={index} className="flex space-x-3 group cursor-pointer">
            <div className="flex-shrink-0">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-20 h-16 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="flex-1">
              <span className="inline-block text-xs font-medium text-primary mb-1">
                {news.category}
              </span>
              <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {news.title}
              </h3>
              <div className="flex items-center space-x-1 mt-2">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{news.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
