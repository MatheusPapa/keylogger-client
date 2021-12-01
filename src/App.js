import { useEffect, useState } from 'react';
import file from '../../../KeyLogger/keys.txt';
import './App.css';

function App() {

  const [text, setText] = useState('');

  useEffect(() => {
    readFile();
  }, [text]);

  function readFile() {
    fetch(file)
    .then(r => r.text())
    .then(text => {
      setText(text);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Texto do arquivo:</p>
        <p>
          {text}
        </p>
      </header>
    </div>
  );
}

export default App;
