import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/header/Header';
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
import { BuyModal } from './components/modals/BuyModal';
import { WalletPage } from './pages/WalletPage';
import { TransactionsPage } from './pages/TransactionsPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import './assets/scss/global.scss';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Router>
      <section
        // style={{ backgroundImage: `url(${heroImage})` }}
        className="flex flex-col h-screen justify-between relative
       bg-no-repeat bg-cover
      ">
        <Header />
        <Switch>
          <Route path='/coins/:coinId' component={CoinDetailsPage} />
          <Route path='/transactions' component={TransactionsPage} />
          <Route path='/leaderboard' component={LeaderboardPage} />
          <Route path='/signup' component={SignupPage} />
          <Route path='/wallet' component={WalletPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/rates' component={RatesPage} />
          <Route path='/news' component={NewsPage} />
          <Route path='/' component={HomePage} />
        </Switch>
        <Footer />
        <BuyModal />
      </section>
    </Router>
  );
}

export default App;
