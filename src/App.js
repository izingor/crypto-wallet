import { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ContactsList } from './pages/ContactsList';
import { StatisticPage } from './pages/StatisticPage';
import { ContactDetails } from './pages/ContactDetails';
import { EditContact } from './pages/EditContact';
import { SignupPage } from './pages/SignupPage';
import './assets/scss/global.scss';

export class App extends Component {


  render() {
    return (
      <Router>
        <section className="main-app ">
          <Header onUserMenu={this.onUserMenu} />
          <Switch>
            <Route path='/contacts/edit/:id' component={EditContact} />
            <Route path='/contact/:id' component={ContactDetails} />
            <Route path='/contacts' component={ContactsList} />
            <Route path = '/signup' component={SignupPage} />
            <Route path='/rates' component={StatisticPage} />
            <Route path='/edit' component={EditContact} />
            <Route path='/' component={Home} />
          </Switch>
          <Footer />
        </section>
      </Router>
    );
  }
}

export default App;
