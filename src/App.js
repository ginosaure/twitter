import logo from './logo.svg';
import './App.css';

const tweets = [
  {
    pseudo: "Gino l'extremiste",
    author: "@Gino",
    content: 'Mon premier tweet'
  },
  {
    pseudo: "Gino l'extremiste",
    author: "@Gino",
    content: "Mon second tweet, Zemmour est un bon président 2022"
  },
  {
    pseudo: "Alexandre le bobo gocho",
    author: "@Alex",
    content: "NTM LEXTREME DROITE DE PD RACISTES _!!!"
  },
]

function App() {
  return (
    <div className="App">
      {tweets.map(tweet => 
        <div className="tweet">
          <div className="author">{tweet.author}</div>
          <div className="pseudo">{tweet.pseudo}</div>
          <div>{tweet.content}</div>
        </div>
      )}
    </div>
  );
}

export default App;
