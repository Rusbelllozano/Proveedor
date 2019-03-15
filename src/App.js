import React, { Component } from 'react';
import Wave, { ReactComponent } from './assets/wave-alt.svg';
import Logo from './assets/logo.png';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Separator from './UIComponents/Separator';
import Brands from './UIComponents/Brands';
// import Mask from './assets/mask.svg';
class App extends Component {
  render() {
    // function Index() {
    //   return <h2>Home</h2>;
    // }
    // function Users() {
    //   return <h2>Users</h2>;
    // }
    const svgReactElement = (
      <svg
        width="471px"
        height="309px"
        viewBox="0 0 471 309"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            d="M279,308 C146.587823,307.785854 19.130402,317.491931 3,206 C-15.0201577,75.6167956 39.9627466,-40.5357318 197,14 C329.55635,59.5638385 470,34.0458062 470,181 C470,288.22563 394.749915,307.785854 279,308 Z"
            id="path-1"
          />
        </defs>
        <g
          id="Product"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="Visitors" transform="translate(-206.000000, -1058.000000)">
            <g
              id="What-happens-when-a-visitor-arrives"
              transform="translate(206.000000, 945.000000)"
            >
              <g id="Video" transform="translate(0.000000, 113.000000)">
                <g id="Mask">
                  <mask id="mask-2" fill="white">
                    <use xlinkHref="#path-1" />
                  </mask>
                  <clipPath id="videoMaskClipPath">
                    <use
                      fill="#F6F6F7"
                      transform="translate(235.000000, 154.000000) scale(-1, 1) translate(-235.000000, -154.000000) "
                      xlinkHref="#path-1"
                    />
                  </clipPath>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
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
    const waysToBuy = [
      {
        title: 'Ubicación fisica',
        description:
          'Puedes visitarnos en la siguiente direccion ubicada en villavicencio'
      },
      {
        title: 'Llamada telefonica',
        description:
          'Puedes visitarnos en la siguiente direccion ubicada en villavicencio'
      },
      {
        title: 'Compras por internet',
        description:
          'Puedes visitarnos en la siguiente direccion ubicada en villavicencio'
      }
    ];
    const features = [
      {
        title: 'Los mejores precios del mercado',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        icon: require('./Icons/Magic.svg')
      },
      {
        title: 'Los mejores precios del mercado',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        icon: require('./Icons/Time.svg')
      },
      {
        title: 'Los mejores precios del mercado',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        icon: require('./Icons/Quality.svg')
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={Logo} className="App-logo" /> */}
          <img src={Wave} className="App-wave" alt="wave" />
        </header>
        <section className="hero">
        
          <h2 className="hero__title">
            Una nueva manera de <br />
            mercar tu hogar
          </h2>
          {/* <Router>
          <Link to="/">Users</Link>
          <Route path="/" exact component={Index} />
          <div>
          <Link to="/users">Users</Link>
          </div>
          <Route path="/users" exact component={Users} />
          </Router> */}
          <p className="hero__details">
            Tenemos infinidad de productos que podrias disfrutar
          </p>
        </section>
        <section className="ways">
          <h2 className="ways__title">Maneras de comprar en el proveedor?</h2>
          <figure className="ways__photo">
            <img src={require('./assets/photo_aldor.jpg')} />
            {svgReactElement}
          </figure>

          <ul className="ways__list">
            {waysToBuy.map((way, index) => {
              return (
                <li className="ways__item" key={`way${index}`}>
                  <div className="way_number">{index + 1}</div>
                  <h3>{way.title}</h3>
                  <p>{way.description}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="brands">
          <Separator label="Con la confianza de miles de empresas en todo el mundo." />
          <Brands brands={brandsData} />
          <Separator />
        </section>
        <section className="features">
          <div className="features__wrapper">
            <h2 className="features__title">
              Por que nosotros y no la competencia
            </h2>
            <ul className="features__list">
              {features.map((feature, index) => {
                return (
                  <li className="features__item" key={`feature${index}`}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <img className="feature_icons" src={feature.icon}/>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6862.597594185685!2d-73.62351633993657!3d4.14045205783984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2e7a0396d27f%3A0x92d608de4b9b888f!2sEl+Proveedor!5e0!3m2!1sen!2sco!4v1552184086336"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen
          />
        </section>
        <footer className="footer">algo</footer>
      </div>
    );
  }
}

export default App;
