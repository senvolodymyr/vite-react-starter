import { useState } from 'react';
import './App.scss';

function App() {
  const [title, setTitle] = useState('');

  const handleClick = () => {
    setTitle('Clicked!!!');
  };

  return (
    <div className="app">
      <div data-testid="header">{title}</div>
      <button type="button" data-testid="clickme" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
