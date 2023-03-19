import tarotDeck from './tarotDeck.js';

console.log(tarotDeck);
var randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
var TarorCard = function TarorCard(props) {
  return React.createElement(
    'div',
    { className: 'row' },
    React.createElement(
      'div',
      { className: 'col-4' },
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement(
          'div',
          { className: 'card-body' },
          React.createElement(
            'h5',
            { className: 'card-title' },
            'Card: ',
            props.name
          ),
          React.createElement('hr', null),
          React.createElement('img', { className: 'card-image img-fluid', src: props.image, alt: 'Card image' })
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'col-4' },
      React.createElement(
        'p',
        { className: 'card-subtitle mb-2 text-muted' },
        'Numerology:',
        props.number
      ),
      React.createElement(
        'p',
        { className: 'card-text' },
        'KeyWords: ',
        props.keywords
      ),
      React.createElement(
        'p',
        { className: 'card-text' },
        'Reversed: ',
        props.reversed
      ),
      React.createElement(
        'p',
        { className: 'card-text' },
        'Description: ',
        React.createElement('br', null),
        props.description
      )
    )
  );
};

var App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Navbar, null),
    React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(TarorCard, { name: randomCard.name, number: randomCard.number, meaning: randomCard.meaning, reversed: randomCard.reversed, image: randomCard.image, description: randomCard.description, keywords: randomCard.keywords }),
          React.createElement(Sidebar, null)
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

var Navbar = function Navbar() {
  return React.createElement(
    'nav',
    { className: 'navbar navbar-expand navbar-light bg-light' },
    React.createElement(
      'a',
      { className: 'navbar-brand', href: 'index.html' },
      'Solar Eclipse, The Gemini Tarot'
    ),
    React.createElement(
      'div',
      { className: 'collapse navbar-collapse', id: 'navbarNav' },
      React.createElement(
        'ul',
        { className: 'navbar-nav' },
        React.createElement(
          'li',
          { className: 'nav-item' },
          React.createElement(
            'a',
            { className: 'nav-link', href: 'index.html' },
            'Card Of The Day'
          )
        )
      )
    )
  );
};

var MainContent = function MainContent() {

  return React.createElement(
    'div',
    null,
    React.createElement('div', { className: 'tarot-card' })
  );
};
var Sidebar = function Sidebar() {
  return React.createElement(
    'div',
    { className: 'col-md-3' },
    React.createElement(
      'div',
      { className: 'border border-primary py-4 px-3' },
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          'Card of the Day'
        ),
        React.createElement(
          'li',
          null,
          'Card of the Week'
        ),
        React.createElement(
          'li',
          null,
          'Card of the Month'
        ),
        React.createElement(
          'li',
          null,
          'Card of the Year'
        ),
        React.createElement('hr', null),
        React.createElement(
          'li',
          null,
          'Get a Reading'
        ),
        React.createElement(
          'li',
          null,
          'Explore The Cards'
        ),
        React.createElement(
          'li',
          null,
          'Learn About Tarot'
        ),
        React.createElement(
          'li',
          null,
          'Learn About Astrology'
        ),
        React.createElement(
          'li',
          null,
          'Learn About Numerology'
        )
      )
    )
  );
};

var Footer = function Footer() {
  return React.createElement(
    'div',
    { className: 'border-top p-2' },
    'Emmah-Lou-Who \xA9 2023'
  );
};

var Link = function Link(props) {
  return (
    //component for links
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: props.url },
        props.name
      )
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));