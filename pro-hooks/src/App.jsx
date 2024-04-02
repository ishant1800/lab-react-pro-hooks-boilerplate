import React, { useEffect, useState } from 'react';
import './App.css';
import { useMemo, useCallback } from 'react';

const LARGE_NUMBER = 1000000000;

function App() {
  const [counter, setCounter] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [themeName, setThemeName] = useState('dark');
  const [currentList, setCurrentList] = useState([]);

  const delayFunction = useMemo(() => {
    console.log('Delay Function Ran');
    for (let index = 0; index < LARGE_NUMBER; index++) {}
    return counter + 2;
  }, [counter]);

  const testFunction = useCallback(() => {
    return [counter * 3, counter * 4];
  }, [counter]);

  useEffect(() => {
    console.log('Callback Function was called');
  }, [testFunction]);

  useEffect(() => {
    if (isDarkTheme) {
      setThemeName('dark');
    } else {
      setThemeName('light');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleChangeValue = () => {
    setCounter(counter + 1);
  };

  const handleList = () => {
    setCurrentList(testFunction);
  };

  const themeStyle = {
    backgroundColor: isDarkTheme ? 'black' : '#ccc7c7',
  };

  return (
    <div className="page" style={themeStyle}>
      <button onClick={toggleTheme}>{themeName}</button>
      <h1>{counter}</h1>
      <button onClick={handleChangeValue}>Change Value</button>
      <button onClick={handleList}>Show List</button>
      <h2>{delayFunction}</h2>
      <div>
        {currentList.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
    </div>
  );
}

export default App;
