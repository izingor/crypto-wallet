import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import './assets/scss/global.scss';

function App() {
  return (
    <section className="main-app">
      <Header />
      <Home />
      <Footer />
    </section>
  );
}

export default App;
