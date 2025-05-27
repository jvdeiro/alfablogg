import React from 'react';
import { Menu, Search, User, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Alfa<span className="text-secondary">.bet</span></span>
              <span className="ml-2 text-sm font-medium text-muted">Blog</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/palpites" className="text-foreground hover:text-palpites font-medium transition-colors">
              Palpites
            </a>
            <a href="/noticias" className="text-foreground hover:text-noticias font-medium transition-colors">
              Notícias
            </a>
            <a href="/estatisticas" className="text-foreground hover:text-estatisticas font-medium transition-colors">
              Estatísticas
            </a>
            <a href="/guias" className="text-foreground hover:text-guias font-medium transition-colors">
              Guias
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-background transition-colors">
              <Search className="h-5 w-5 text-muted" />
            </button>
            <a 
              href="https://alfa.bet/register" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
            >
              Aposte Agora
            </a>
            <button className="md:hidden p-2 rounded-full hover:bg-background transition-colors">
              <Menu className="h-5 w-5 text-muted" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
