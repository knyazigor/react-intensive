import InputField from './components/InputField';
import './App.css';
import { useRef, useState } from 'react';
import RequestList from './components/RequestList';

function App() {
  const inputRef = useRef(null);
  const [list, setList] = useState(['Answer to the Ultimate Question of Life, The Universe, and Everything', 'To be or not to be']);
    
  const handleForceFocus = () => {
    inputRef.current.focus();
  };

  const handleAddToList = (value) => {
    setList([...list, value]);
  }

  return (
    <div className="App">
      <main className="main">
        <div className="logo">bruhgle</div>
        <InputField inputRef={inputRef} handleAddToList={handleAddToList} />
        <button className="btn" onClick={handleForceFocus}>Set focus</button>
        <RequestList requests={list} />
      </main>
    </div>
  );
}

export default App;
