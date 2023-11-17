import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/HomePage/NavBar';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <NavBar />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App