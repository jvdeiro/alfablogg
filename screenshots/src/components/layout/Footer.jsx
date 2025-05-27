import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">Alfa<span className="text-secondary">.bet</span></span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              O melhor conteúdo sobre apostas esportivas, estatísticas e prognósticos.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">+18</span>
              <span className="text-xs text-gray-400">Jogue com responsabilidade</span>
            </div>
          </div>

          {/* Editorias */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Editorias</h3>
            <ul className="space-y-2">
              <li><a href="/palpites" className="text-gray-400 hover:text-secondary transition-colors">Palpites</a></li>
              <li><a href="/noticias" className="text-gray-400 hover:text-secondary transition-colors">Notícias</a></li>
              <li><a href="/estatisticas" className="text-gray-400 hover:text-secondary transition-colors">Estatísticas</a></li>
              <li><a href="/guias" className="text-gray-400 hover:text-secondary transition-colors">Guias</a></li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="https://alfa.bet" className="text-gray-400 hover:text-secondary transition-colors">Site Principal</a></li>
              <li><a href="https://alfa.bet/register" className="text-gray-400 hover:text-secondary transition-colors">Cadastre-se</a></li>
              <li><a href="https://alfa.bet/promotions" className="text-gray-400 hover:text-secondary transition-colors">Promoções</a></li>
              <li><a href="https://alfa.bet/responsible-gaming" className="text-gray-400 hover:text-secondary transition-colors">Jogo Responsável</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Redes Sociais</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Alfa.bet. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-400 hover:text-secondary transition-colors">Termos de Uso</a>
            <a href="#" className="text-xs text-gray-400 hover:text-secondary transition-colors">Política de Privacidade</a>
            <a href="#" className="text-xs text-gray-400 hover:text-secondary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
