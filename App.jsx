import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Videos from './pages/Videos'
import StarPromo from './pages/StarPromo'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div className="min-h-screen p-6">
      <Nav />
      <main className="max-w-5xl mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/starpromo" element={<StarPromo/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <footer className="max-w-5xl mx-auto text-center py-6 text-gray-600">© {new Date().getFullYear()} Eliterallytrap</footer>
    </div>
  )
}
