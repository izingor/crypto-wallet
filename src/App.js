import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RatesPage } from './pages/RatesPage';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/modules/user.store';
import { NewsPage } from './pages/NewsPage';
import { CoinDetailsPage } from './pages/CoinDetailsPage';

import './assets/scss/global.scss';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);


  return (
    <Router>
      <section className="flex flex-col h-screen justify-between">
        <Header />
        <Switch>
          <Route path='/coins/:coinName' component={CoinDetailsPage} />
          <Route path='/news' component={NewsPage} />
          <Route path='/signup' component={SignupPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/rates' component={RatesPage} />
          <Route path='/' component={HomePage} />
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
