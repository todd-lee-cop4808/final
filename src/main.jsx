import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Components/Layout.jsx'
import Post from './pages/PostDetails.jsx'
import Create from './pages/CreatePost.jsx'
import Update from './pages/UpdatePost.jsx'
import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="CreatePosts" element={<Create />} />
          <Route path="Post/:id" element={<Post />} />
          <Route path="UpdatePost/:id" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
