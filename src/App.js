import { HashRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { StatisticPage } from './pages/StatisticPage';
import { EditContact } from './pages/EditContact';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import './assets/scss/global.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/modules/user.store';


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
          {/* <Route path='/contacts/edit/:id' component={EditContact} /> */}
          {/* <Route path='/contact/:id' component={ContactDetails} /> */}
          {/* <Route path='/contacts' component={ContactsList} /> */}
          <Route path='/signup' component={SignupPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/rates' component={StatisticPage} />
          <Route path='/edit' component={EditContact} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
