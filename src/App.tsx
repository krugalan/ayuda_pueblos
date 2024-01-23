import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/HomePage/NavBar';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  const [whiteNavBar, setWhiteNavBar] = useState(false);

  return (
    <BrowserRouter>
      <Provider store={store}>

        <div className="page-wrapper">
          <NavBar whiteNavBar={whiteNavBar} setWhiteNavBar={setWhiteNavBar} />
          <AppRouter />
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App