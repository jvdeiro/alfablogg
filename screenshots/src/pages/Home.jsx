import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ArticleCard from '../components/ui/ArticleCard';
import OddsWidget from '../components/ui/OddsWidget';
import { ArrowRight } from 'lucide-react';

// Dados de exemplo para demonstração
const featuredArticle = {
  title: "Brasileirão 2025: Análise completa da rodada do fim de semana",
  excerpt: "Confira os principais jogos, estatísticas e palpites para a próxima rodada do Campeonato Brasileiro.",
  category: "Palpites",
  image: "https://placehold.co/800x450/0066cc/FFFFFF/png?text=Brasileirão+2025",
  date: "27 Mai 2025",
  author: {
    name: "Lucas Correia",
    avatar: "https://placehold.co/100/9933cc/FFFFFF/png?text=LC"
  }
};

const articles = [
  {
    title: "Os 5 maiores artilheiros da temporada europeia",
    excerpt: "Conheça os atacantes que estão dominando as principais ligas da Europa nesta temporada.",
    category: "Estatisticas",
    image: "https://placehold.co/600x350/00cc99/FFFFFF/png?text=Artilheiros",
    date: "26 Mai 2025",
    author: {
      name: "Diego Viñas",
      avatar: "https://placehold.co/100/ff6600/FFFFFF/png?text=DV"
    }
  },
  {
    title: "Como funciona o mercado asiático de apostas?",
    excerpt: "Guia completo sobre o funcionamento do mercado asiático e suas vantagens para apostadores.",
    category: "Guias",
    image: "https://placehold.co/600x350/9933cc/FFFFFF/png?text=Guia+Apostas",
    date: "25 Mai 2025",
    author: {
      name: "Matheus Frade",
      avatar: "https://placehold.co/100/0066cc/FFFFFF/png?text=MF"
    }
  },
  {
    title: "Contratação bombástica: Astro internacional chega ao Brasil",
    excerpt: "Clube brasileiro surpreende e anuncia a contratação de estrela do futebol europeu.",
    category: "Noticias",
    image: "https://placehold.co/600x350/0066cc/FFFFFF/png?text=Contratação",
    date: "24 Mai 2025",
    author: {
      name: "Lucas Correia",
      avatar: "https://placehold.co/100/9933cc/FFFFFF/png?text=LC"
    }
  },
  {
    title: "Análise tática: Como o esquema 4-3-3 dominou o futebol moderno",
    excerpt: "Entenda por que tantos times de sucesso adotaram esta formação e como ela evoluiu.",
    category: "Estatisticas",
    image: "https://placehold.co/600x350/00cc99/FFFFFF/png?text=Tática",
    date: "23 Mai 2025",
    author: {
      name: "Diego Viñas",
      avatar: "https://placehold.co/100/ff6600/FFFFFF/png?text=DV"
    }
  }
];

const upcomingMatches = [
  {
    id: "match-001",
    homeTeam: {
      name: "Flamengo",
      logo: "https://placehold.co/100/ff0000/FFFFFF/png?text=FLA"
    },
    awayTeam: {
      name: "Palmeiras",
      logo: "https://placehold.co/100/00aa00/FFFFFF/png?text=PAL"
    },
    date: "28 Mai • 20:00",
    odds: {
      home: "2.10",
      draw: "3.25",
      away: "3.50"
    }
  },
  {
    id: "match-002",
    homeTeam: {
      name: "São Paulo",
      logo: "https://placehold.co/100/ff0000/FFFFFF/png?text=SAO"
    },
    awayTeam: {
      name: "Corinthians",
      logo: "https://placehold.co/100/000000/FFFFFF/png?text=COR"
    },
    date: "29 Mai • 16:00",
    odds: {
      home: "2.40",
      draw: "3.10",
      away: "3.00"
    }
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ArticleCard article={featuredArticle} size="large" />
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold mb-4">Próximos Jogos</h2>
                {upcomingMatches.map((match, index) => (
                  <OddsWidget key={index} match={match} odds={match.odds} />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* The Alphas Section */}
        <section className="py-12 bg-foreground text-white">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">The Alphas</h2>
              <a href="/the-alphas" className="text-secondary flex items-center hover:underline">
                Ver todos <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-foreground/80 rounded-lg p-6 border border-gray-800">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3">
                  <img 
                    src="https://placehold.co/600x400/ff6600/FFFFFF/png?text=The+Alphas" 
                    alt="The Alphas" 
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <span className="text-secondary font-medium mb-2 block">Campanha</span>
                  <h3 className="text-2xl font-bold mb-4">Marco Luke analisa os favoritos da Champions</h3>
                  <p className="text-gray-400 mb-6">
                    O especialista Marco Luke traz suas análises exclusivas sobre os times com mais chances de conquistar a Champions League nesta temporada.
                  </p>
                  <a 
                    href="/the-alphas/marco-luke-champions" 
                    className="bg-secondary text-white px-4 py-2 rounded-md inline-flex items-center hover:bg-secondary/90 transition-colors"
                  >
                    Ler análise <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Latest Articles Section */}
        <section className="py-12">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Últimos Artigos</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Todos
                </button>
                <button className="px-3 py-1 rounded-full bg-background text-muted text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                  Palpites
                </button>
                <button className="px-3 py-1 rounded-full bg-background text-muted text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                  Notícias
                </button>
                <button className="px-3 py-1 rounded-full bg-background text-muted text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                  Estatísticas
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {articles.map((article, index) => (
                <div key={index} className="col-span-1">
                  <ArticleCard article={article} size="small" />
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="/artigos" 
                className="inline-flex items-center text-primary hover:underline"
              >
                Ver todos os artigos <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 bg-secondary/10">
          <div className="container mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Pronto para apostar?</h2>
                <p className="text-muted">
                  Cadastre-se agora na Alfa.bet e ganhe um bônus de boas-vindas!
                </p>
              </div>
              <a 
                href="https://alfa.bet/register" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary text-white px-6 py-3 rounded-md font-medium hover:bg-secondary/90 transition-colors whitespace-nowrap"
              >
                Cadastre-se Agora
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
