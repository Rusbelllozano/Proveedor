import React, { Component } from 'react';
import Wave from './assets/wave-alt.svg';
import Logo from './assets/logo.png';
import './App.css';
import Brands from './UIComponents/Brands';

class App extends Component {
  render() {
    const brandsData = [
      {
        url: require('./assets/branch/1colombina.png')
      },
      {
        url: require('./assets/branch/2super.png')
      },
      {
        url: require('./assets/branch/3mondelez.png')
      },
      {
        url: require('./assets/branch/4ferrero.png')
      },
      {
        url: require('./assets/branch/5americandy.png')
      },
      {
        url: require('./assets/branch/6confiteca.png')
      },
      {
        url: require('./assets/branch/7aldor.png')
        // },
        // {
        //   url: require('./assets/branch/8adro.png')
        // },
        // {
        //   url: require('./assets/branch/9arcor.png')
        // },
        // {
        //   url: require('./assets/branch/10candiota.png')
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="App-logo" />
          <img src={Wave} className="App-wave" alt="wave" />
        </header>
        <section className="hero">
          <h2 className="hero__title">
            Una nueva manera de <br />
            mercar tu hogar
          </h2>
          <p className="hero__details">
            Tenemos infinidad de productos que podrias disfrutar
          </p>
        </section>
        <section className="brands">
          <div className="brands__separator">
            Con la confianza de miles de empresas en todo el mundo.
          </div>
          <Brands brands={brandsData} />
        </section>
      </div>
    );
  }
}

export default App;
