import React, { useState, useEffect } from 'react';
import './App.css';

const SearchBar = ({ onSearch }) => {
  const headings = ['Craving for something Sweet?', 'Baking gone wrong?', 'Sweet tooth?'];
  const [currentHeading, setCurrentHeading] = useState(headings[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % headings.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [headings.length]);

  useEffect(() => {
    setCurrentHeading(headings[index]);
  }, [index, headings]);

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
    setQuery('');
  };

  return (
    <div className="search">
      <h2 className="h">{currentHeading}</h2>
      <p className="p">Order from Bakeries near you</p>
      <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for Bakery Items"
      />
      <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
