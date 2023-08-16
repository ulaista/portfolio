import React, { useState, useEffect } from 'react';
import Header from './components/header';
import PortfolioItem from './components/PortfolioItem';

const App = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    // Здесь можно получать данные с сервера (бэкэнд) и установить их в state.
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="portfolio-list">
        {portfolioItems.map(item => (
          <PortfolioItem key={item.id} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default App;
