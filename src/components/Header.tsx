
import { Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const navItems = [
    "Beranda", "Politik", "Hukum", "Ekonomi", "Olahraga", "Teknologi", "Lifestyle", "Hiburan"
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3 border-b">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-primary">BeritaKu</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Cari berita..." 
                className="pl-10 w-64"
              />
            </div>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="py-4">
          <div className="flex items-center space-x-8 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
