import tarotDeck from './tarotDeck.js';


console.log(tarotDeck);
const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];



const TarorCard = (props) => {
  return (
    <div>
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card: {props.name}</h5>
            <hr/>
            <img className='card-image img-fluid' src={props.image} alt="Card image" />
            <p className="card-subtitle mb-2 text-muted">Numerology:{props.number}</p>
            <p className="card-text">KeyWords: {props.keywords}</p>
            <p className="card-text">Reversed: {props.reversed}</p>
            <p className='card-text'>Description: <br />{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
class CardReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: []
    };
    this.drawCards = this.drawCards.bind(this);
  }
  drawCards() {
    const currentSpread = [];
    for (let i = 0; i < 3; i++) {
      const randomCard = this.props.tarotDeck[Math.floor(Math.random() * this.props.tarotDeck.length)];
      currentSpread.push(randomCard);
    }
    this.setState({
      card: currentSpread
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.drawCards}>Draw Cards</button>
        {this.state.card.map(card => {
          return (
            <TarorCard
              name={card.name}
              meaning={card.meaning}
              number={card.number}
              reversed={card.reversed}
              image={card.image}
              description={card.description}
              keywords={card.keywords}
            />
          );
        })}
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <div>
            <CardReader tarotDeck={tarotDeck} />
            
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>


  
      
  );
}



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand" href="index.html">Solar Eclipse, The Gemini Tarot</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">Card Of The Day</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const MainContent = () => {
  
  
  return (
    <div>
      <div className="tarot-card">

      </div>
    </div>
  );
}
const Sidebar = () => {
  return (
    <div className="col-md-3">
      <div className="border border-primary py-4 px-3">
        <ul>
          
          <li>Card of the Day</li>
          <li>Card of the Week</li>
          <li>Card of the Month</li>
          <li>Card of the Year</li>
          <hr />
          <li>Get a Reading</li>
          <li>Explore The Cards</li>
          <li>Learn About Tarot</li>
          <li>Learn About Astrology</li>
          <li>Learn About Numerology</li>
        </ul>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="border-top p-2">
      Emmah-Lou-Who © 2023
    </div>
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);




