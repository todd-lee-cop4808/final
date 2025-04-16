import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { supabase } from "../client.jsx";
import '../styles/Layout.css';

const Layout = () => {
  const [posts, setPosts] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const readPost = async () => {
      const { data, error } = await supabase
        .from("final")
        .select()
        .is("parent", null);
      if (data) {
        setPosts(data);
        setFilteredResults(data);
      }
    };
    readPost().catch(console.error);
  }, []);

  return (
    <div>
      <header className="topbar">
        <div className="topbar-inner">
          <div className="logo">Hobby Hut</div>

          <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/CreatePosts" className="nav-link">Create New Post</Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet context={[filteredResults, setFilteredResults]} />
      </main>

      <footer className="footer">
        <p>© 2025 Hobby Hut. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;