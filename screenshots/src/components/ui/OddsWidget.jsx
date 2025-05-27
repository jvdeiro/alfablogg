import React from 'react';
import { ArrowRight, TrendingUp, Calendar, Award } from 'lucide-react';

const OddsWidget = ({ match, odds }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="editoria-tag editoria-palpites">Palpite</span>
        </div>
        <span className="text-xs text-muted">{match.date}</span>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          {match.homeTeam.logo && (
            <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-8 h-8 mr-2" />
          )}
          <span className="font-medium">{match.homeTeam.name}</span>
        </div>
        <span className="text-lg font-bold">vs</span>
        <div className="flex items-center">
          <span className="font-medium">{match.awayTeam.name}</span>
          {match.awayTeam.logo && (
            <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-8 h-8 ml-2" />
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        <button className="bg-background hover:bg-background/80 border border-border rounded p-2 text-center transition-colors">
          <div className="text-xs text-muted mb-1">Casa</div>
          <div className="font-bold">{odds.home}</div>
        </button>
        <button className="bg-background hover:bg-background/80 border border-border rounded p-2 text-center transition-colors">
          <div className="text-xs text-muted mb-1">Empate</div>
          <div className="font-bold">{odds.draw}</div>
        </button>
        <button className="bg-background hover:bg-background/80 border border-border rounded p-2 text-center transition-colors">
          <div className="text-xs text-muted mb-1">Fora</div>
          <div className="font-bold">{odds.away}</div>
        </button>
      </div>
      
      <a 
        href={`https://alfa.bet/bet?match=${match.id}&selection=home&odds=${odds.home}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-secondary text-white py-2 px-4 rounded flex items-center justify-center hover:bg-secondary/90 transition-colors"
      >
        Apostar Agora <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

export default OddsWidget;
