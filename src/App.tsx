import React from 'react'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom';
import { NavBarHome } from './components/HomePage/NavBarHome';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="page-wrapper">
          <NavBarHome />
          <AppRouter />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App