import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/HomePage/NavBar';
import { Footer } from './components/Footer';
import { useState } from 'react';

const App = () => {
  const [whiteNavBar, setWhiteNavBar] = useState(false);

  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <NavBar whiteNavBar={whiteNavBar} setWhiteNavBar={setWhiteNavBar} />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App