import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
<<<<<<< HEAD
import './assets/scss/global.scss';

function App() {
  return (
    <section className="main-app">
      <Header />
      <Home />
      <Footer />
    </section>
  );
=======
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
      menuStatus[key] = false;
    }
    menuStatus[menu] = true;

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
>>>>>>> f6d66b7863c03740ccad012a5dc2684109d2e624
}

export default App;
