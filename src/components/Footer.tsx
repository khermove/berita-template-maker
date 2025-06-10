
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Kategori",
      links: ["Politik", "Ekonomi", "Olahraga", "Teknologi", "Lifestyle", "Hiburan"]
    },
    {
      title: "Perusahaan", 
      links: ["Tentang Kami", "Redaksi", "Karir", "Kontak", "Kebijakan Privasi"]
    },
    {
      title: "Layanan",
      links: ["Newsletter", "RSS Feed", "Mobile App", "API", "Iklan"]
    }
  ];

  return (
    <footer className="bg-muted/30 border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">BeritaKu</h3>
            <p className="text-muted-foreground text-sm">
              Portal berita terpercaya yang menghadirkan informasi terkini dan akurat 
              untuk masyarakat Indonesia.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t mt-8 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>redaksi@beritaku.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+62 21 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-6 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 BeritaKu. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
