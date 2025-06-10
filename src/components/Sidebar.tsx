
import { TrendingUp, Users, Calendar } from "lucide-react";

const Sidebar = () => {
  const trendingTopics = [
    "Pemilu 2024",
    "Ekonomi Digital", 
    "Perubahan Iklim",
    "Startup Indonesia",
    "Pendidikan Online"
  ];

  const popularAuthors = [
    { name: "Ahmad Rizki", articles: 124, followers: "2.3K" },
    { name: "Sari Indah", articles: 98, followers: "1.8K" },
    { name: "Budi Santoso", articles: 87, followers: "1.5K" },
    { name: "Dewi Kusuma", articles: 76, followers: "1.2K" }
  ];

  const upcomingEvents = [
    { 
      title: "Konferensi Teknologi Indonesia",
      date: "15 Jan 2024",
      location: "Jakarta"
    },
    {
      title: "Summit Ekonomi Digital",
      date: "22 Jan 2024", 
      location: "Surabaya"
    },
    {
      title: "Festival Inovasi Startup",
      date: "5 Feb 2024",
      location: "Bandung"
    }
  ];

  return (
    <aside className="space-y-6">
      {/* Trending Topics */}
      <div className="bg-card rounded-lg p-4 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-card-foreground">Topik Trending</h3>
        </div>
        <div className="space-y-2">
          {trendingTopics.map((topic, index) => (
            <a 
              key={index}
              href="#" 
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              #{topic}
            </a>
          ))}
        </div>
      </div>

      {/* Popular Authors */}
      <div className="bg-card rounded-lg p-4 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-card-foreground">Penulis Populer</h3>
        </div>
        <div className="space-y-3">
          {popularAuthors.map((author, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-card-foreground">{author.name}</p>
                <p className="text-xs text-muted-foreground">{author.articles} artikel</p>
              </div>
              <span className="text-xs text-primary font-medium">{author.followers}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-card rounded-lg p-4 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-card-foreground">Event Mendatang</h3>
        </div>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="border-l-2 border-primary pl-3">
              <h4 className="text-sm font-medium text-card-foreground line-clamp-1">
                {event.title}
              </h4>
              <div className="text-xs text-muted-foreground mt-1">
                <p>{event.date}</p>
                <p>{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-primary/5 rounded-lg p-4">
        <h3 className="font-semibold text-primary mb-2">Newsletter</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Dapatkan berita terbaru langsung di email Anda
        </p>
        <div className="space-y-2">
          <input 
            type="email" 
            placeholder="Email Anda"
            className="w-full px-3 py-2 text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="w-full bg-primary text-primary-foreground px-3 py-2 text-sm rounded-md hover:bg-primary/90 transition-colors">
            Berlangganan
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
