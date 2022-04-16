import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Component } from 'react';
import './assets/scss/global.scss';

export class App extends Component {

  state = {

    menuStatus: {
      user: true,
      contacts: false,
      rates: false
    }


  };

  onUserMenu = (menu) => {
    const menuStatus = { ...this.state.menuStatus };

    for (const key in menuStatus) {
      if (key === menu) {
        menuStatus[menu] = true;
      } else {
        menuStatus[key] = false;
      }
    }
    this.setState({ menuStatus: menuStatus });
  };

  render() {
    const { menuStatus } = this.state;
    return (
      <section className="main-app">
        <Header onUserMenu={this.onUserMenu} />
        <Home menuStatus={menuStatus} />
        <Footer />
      </section>
    );
  }
}

export default App;
