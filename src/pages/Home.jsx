import React, { useState, useEffect } from 'react';
import { supabase } from "../client.jsx";
import { useOutletContext } from "react-router-dom";
import Cards from '../Components/Cards.jsx';
import '../styles/Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [filteredResults, setFilteredResults] = useOutletContext();
  const [orderBy, setOrderBy] = useState('created_at');
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const readPost = async () => {
      const { data, error } = await supabase
        .from("final")
        .select()
        .is("parent", null)
        .order(orderBy, { ascending: false });

      if (data) {
        setPosts(data);
        setFilteredResults(data);
        setLoading(true);
      }
    };

    readPost().catch(console.error);
  }, [orderBy]);

  const handleSearch = (value) => {
    setSearchInput(value);
    if (value !== "") {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults(posts);
    }
  };

  const showCards = filteredResults.length > 0 ? filteredResults : posts;

  return (
    <div className="home">
      <input
        className="searchbar"
        type="text"
        placeholder="Search Post..."
        value={searchInput}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {!loading && <div className="loading"></div>}

      {showCards.length > 0 && (
        <div className="order-by">
          <h4>Order by:</h4>
          <button className="sort-button" onClick={() => setOrderBy('created_at')}>Newest</button>
          <button className="sort-button" onClick={() => setOrderBy('upvotes')}>Most Popular</button>
        </div>
      )}

      <div className="card-column">
        {showCards.length > 0 ? (
          showCards.map((post) => (
            <Cards key={post.id} {...post} />
          ))
        ) : (
          <div className="empty-state">
            <h2>No posts yet</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;