import logo from './logo.svg';
import './App.css';

// const element = <div>This is JSX</div>;
// const element = <img src={user.avatarUrl}></img>;
const element = (
  <div>
    <h1>JSX</h1>
    <div>여러줄은 괄호로 묶어서 사용할 수 있습니다.</div>
  </div>
);

function greeting(name){
  if(name === "react") // 등호표시 주의
  return "hello! " + name;
  else
  return "hello! guest";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Hi~
          { element }

          <h1>
            {greeting("react1")}
          </h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
