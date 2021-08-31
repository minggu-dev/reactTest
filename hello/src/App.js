import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Test } from './components/test.js';

// const element = <div>This is JSX</div>;
// const element = <img src={user.avatarUrl}></img>;
const element = (
  <div>
    <h1>JSX</h1>
    <div>여러줄은 괄호로 묶어서 사용할 수 있습니다.</div>
  </div>
);

// 클래스형 컴포넌트
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

// 함수형 컴포넌트
function Greeting(prop) {
  // 컴포넌트는 항상 대문자로 시작해야한다.
  // if(prop.name === "react") // 등호표시 주의
  // return "hello! " + prop.name;
  // else
  // return "hello! guest";
  return `hello!${prop.name}`;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hi~
          {element}
          <h1>
            <Greeting name="mino" />
            <Greeting name="minggu" />
            <Greeting name="binggu" />
          </h1>
          <h1>
            <Hello name="hi" />
          </h1>
          <div>
            <Test />
          </div>
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
