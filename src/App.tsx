import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Gamepad2, Radio } from 'lucide-react';
import ButtonPage from './pages/ButtonPage';
import DisplayPage from './pages/DisplayPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
        <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center text-white hover:text-indigo-200">
                  <Gamepad2 className="h-8 w-8 mr-2" />
                  <span className="text-xl font-bold">RealTime Click</span>
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link
                  to="/button"
                  className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Button Controller
                </Link>
                <Link
                  to="/display"
                  className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Display
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/display" element={<DisplayPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">
          Welcome to RealTime Click
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link
            to="/button"
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all group"
          >
            <Gamepad2 className="h-16 w-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold text-white mb-2">Button Controller</h2>
            <p className="text-indigo-100">
              Click buttons to send real-time signals to the display page
            </p>
          </Link>
          <Link
            to="/display"
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all group"
          >
            <Radio className="h-16 w-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold text-white mb-2">Display</h2>
            <p className="text-indigo-100">
              Watch real-time button clicks and animations
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;