var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import tarotDeck from './tarotDeck.js';

console.log(tarotDeck);
var randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];

var TarorCard = function TarorCard(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "col-4" },
      React.createElement(
        "div",
        { className: "card" },
        React.createElement(
          "div",
          { className: "card-body" },
          React.createElement(
            "h5",
            { className: "card-title" },
            "Card: ",
            props.name
          ),
          React.createElement("hr", null),
          React.createElement("img", { className: "card-image img-fluid", src: props.image, alt: "Card image" }),
          React.createElement(
            "p",
            { className: "card-subtitle mb-2 text-muted" },
            "Numerology:",
            props.number
          ),
          React.createElement(
            "p",
            { className: "card-text" },
            "KeyWords: ",
            props.keywords
          ),
          React.createElement(
            "p",
            { className: "card-text" },
            "Reversed: ",
            props.reversed
          ),
          React.createElement(
            "p",
            { className: "card-text" },
            "Description: ",
            React.createElement("br", null),
            props.description
          )
        )
      )
    )
  );
};

var CardReader = function (_React$Component) {
  _inherits(CardReader, _React$Component);

  function CardReader(props) {
    _classCallCheck(this, CardReader);

    var _this = _possibleConstructorReturn(this, (CardReader.__proto__ || Object.getPrototypeOf(CardReader)).call(this, props));

    _this.state = {
      card: []
    };
    _this.drawCards = _this.drawCards.bind(_this);
    return _this;
  }

  _createClass(CardReader, [{
    key: "drawCards",
    value: function drawCards() {
      var currentSpread = [];
      for (var i = 0; i < 3; i++) {
        var _randomCard = this.props.tarotDeck[Math.floor(Math.random() * this.props.tarotDeck.length)];
        currentSpread.push(_randomCard);
      }
      this.setState({
        card: currentSpread
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.drawCards },
          "Draw Cards"
        ),
        this.state.card.map(function (card) {
          return React.createElement(TarorCard, {
            name: card.name,
            meaning: card.meaning,
            number: card.number,
            reversed: card.reversed,
            image: card.image,
            description: card.description,
            keywords: card.keywords
          });
        })
      );
    }
  }]);

  return CardReader;
}(React.Component);

var App = function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, null),
    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement(CardReader, { tarotDeck: tarotDeck }),
          React.createElement(Sidebar, null)
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

var Navbar = function Navbar() {
  return React.createElement(
    "nav",
    { className: "navbar navbar-expand navbar-light bg-light" },
    React.createElement(
      "a",
      { className: "navbar-brand", href: "index.html" },
      "Solar Eclipse, The Gemini Tarot"
    ),
    React.createElement(
      "div",
      { className: "collapse navbar-collapse", id: "navbarNav" },
      React.createElement(
        "ul",
        { className: "navbar-nav" },
        React.createElement(
          "li",
          { className: "nav-item" },
          React.createElement(
            "a",
            { className: "nav-link", href: "index.html" },
            "Card Of The Day"
          )
        )
      )
    )
  );
};

var MainContent = function MainContent() {

  return React.createElement(
    "div",
    null,
    React.createElement("div", { className: "tarot-card" })
  );
};
var Sidebar = function Sidebar() {
  return React.createElement(
    "div",
    { className: "col-md-3" },
    React.createElement(
      "div",
      { className: "border border-primary py-4 px-3" },
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "Card of the Day"
        ),
        React.createElement(
          "li",
          null,
          "Card of the Week"
        ),
        React.createElement(
          "li",
          null,
          "Card of the Month"
        ),
        React.createElement(
          "li",
          null,
          "Card of the Year"
        ),
        React.createElement("hr", null),
        React.createElement(
          "li",
          null,
          "Get a Reading"
        ),
        React.createElement(
          "li",
          null,
          "Explore The Cards"
        ),
        React.createElement(
          "li",
          null,
          "Learn About Tarot"
        ),
        React.createElement(
          "li",
          null,
          "Learn About Astrology"
        ),
        React.createElement(
          "li",
          null,
          "Learn About Numerology"
        )
      )
    )
  );
};

var Footer = function Footer() {
  return React.createElement(
    "div",
    { className: "border-top p-2" },
    "Emmah-Lou-Who \xA9 2023"
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));