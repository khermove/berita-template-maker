
import ArticleCard from "./ArticleCard";

const NewsGrid = () => {
  const articles = [
    {
      id: 1,
      title: "Startup Indonesia Raih Pendanaan 50 Juta Dollar dari Investor Asing",
      summary: "Startup teknologi finansial asal Indonesia berhasil meraih pendanaan Series B senilai 50 juta dollar Amerika dari konsorsium investor internasional.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
      category: "Teknologi",
      time: "1 jam yang lalu",
      views: "8.5K",
      author: "Ahmad Rizki"
    },
    {
      id: 2,
      title: "Pemerintah Luncurkan Program Beasiswa untuk 10.000 Mahasiswa",
      summary: "Kementerian Pendidikan mengumumkan program beasiswa nasional yang akan memberikan kesempatan pendidikan tinggi kepada 10.000 mahasiswa berprestasi.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      category: "Pendidikan",
      time: "2 jam yang lalu", 
      views: "12.1K",
      author: "Sari Indah"
    },
    {
      id: 3,
      title: "Ekspor Produk UMKM Indonesia Meningkat 25% di Kuartal Pertama",
      summary: "Data Kementerian Koperasi dan UKM menunjukkan pertumbuhan signifikan ekspor produk UMKM Indonesia ke berbagai negara di kawasan Asia Tenggara.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "Ekonomi",
      time: "3 jam yang lalu",
      views: "6.8K", 
      author: "Budi Santoso"
    },
    {
      id: 4,
      title: "Festival Budaya Nusantara Digelar di 34 Provinsi Secara Serentak",
      summary: "Kementerian Pariwisata dan Ekonomi Kreatif menggelar festival budaya nusantara yang menampilkan keragaman seni dan budaya dari seluruh Indonesia.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=250&fit=crop",
      category: "Budaya",
      time: "4 jam yang lalu",
      views: "9.2K",
      author: "Dewi Kusuma"
    },
    {
      id: 5,
      title: "Peneliti Indonesia Temukan Metode Baru Pengolahan Sampah Plastik",
      summary: "Tim peneliti dari Institut Teknologi Bandung berhasil mengembangkan teknologi inovatif untuk mengubah sampah plastik menjadi bahan bakar alternatif.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
      category: "Sains",
      time: "5 jam yang lalu",
      views: "7.3K",
      author: "Dr. Andi Wijaya"
    },
    {
      id: 6,
      title: "Infrastruktur Digital Indonesia Masuk 10 Besar Dunia",
      summary: "Menurut laporan Global Digital Infrastructure Index, Indonesia berhasil masuk peringkat 10 besar dunia dalam pengembangan infrastruktur digital.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      category: "Teknologi", 
      time: "6 jam yang lalu",
      views: "11.7K",
      author: "Rina Pratiwi"
    }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Berita Terbaru</h2>
        <a href="#" className="text-primary hover:text-primary/80 font-medium text-sm">
          Lihat Semua
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default NewsGrid;
