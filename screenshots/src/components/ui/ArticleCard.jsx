import React from 'react';

const ArticleCard = ({ article, size = 'medium' }) => {
  const { title, excerpt, category, image, date, author } = article;
  
  // Definir classes com base no tamanho do card
  const cardClasses = {
    large: 'col-span-2 md:col-span-2',
    medium: 'col-span-2 md:col-span-1',
    small: 'col-span-1'
  };
  
  // Definir classes para a tag de categoria
  const categoryClasses = {
    palpites: 'editoria-palpites',
    noticias: 'editoria-noticias',
    estatisticas: 'editoria-estatisticas',
    guias: 'editoria-guias'
  };
  
  return (
    <div className={`card overflow-hidden flex flex-col ${cardClasses[size]}`}>
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute bottom-0 left-0 p-2">
          <span className={`editoria-tag ${categoryClasses[category.toLowerCase()]}`}>
            {category}
          </span>
        </div>
      </div>
      
      <div className="flex-1 p-4">
        <h3 className={`font-bold ${size === 'large' ? 'text-2xl' : 'text-xl'} mb-2 line-clamp-2`}>
          <a href="#" className="hover:text-primary transition-colors">
            {title}
          </a>
        </h3>
        
        <p className="text-muted text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
          <div className="flex items-center">
            {author.avatar && (
              <img 
                src={author.avatar} 
                alt={author.name} 
                className="w-6 h-6 rounded-full mr-2"
              />
            )}
            <span className="text-xs text-muted">{author.name}</span>
          </div>
          <span className="text-xs text-muted">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
