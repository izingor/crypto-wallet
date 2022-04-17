import { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ContactsList } from './pages/ContactsList';
import { StatisticPage } from './pages/StatisticPage';
import './assets/scss/global.scss';

export class App extends Component {

  state = {

    // menuStatus: {
    //   user: true,
    //   contacts: false,
    //   rates: false
    // }


  };

  // onUserMenu = (menu) => {
  //   const menuStatus = { ...this.state.menuStatus };

  //   for (const key in menuStatus) {
  //     if (key === menu) {
  //       menuStatus[menu] = true;
  //     } else {
  //       menuStatus[key] = false;
  //     }
  //   }
  //   this.setState({ menuStatus: menuStatus });
  // };

  render() {
    const { menuStatus } = this.state;
    return (
      <Router>
        <section className="main-app container">
          <Header onUserMenu={this.onUserMenu} />
          {/* <Home menuStatus={menuStatus} /> */}
          <Switch>


            <Route path='/contacts' component={ContactsList} />
            <Route path = '/rates' component={StatisticPage} />
            <Route path='/' component={Home} />
          

          </Switch>
          <Footer />
        </section>
      </Router>
    );
  }
}

export default App;
