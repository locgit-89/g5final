import React, { useState, useEffect } from 'react';
import { useHotkeys } from 'react-hotkeys';

function Counter() {
  const [count, setCount] = useState(0);

  useHotkeys('f5', () => {
    setCount((prevCount) => prevCount + 1);
    localStorage.setItem('count', prevCount + 1);
  });

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(parseInt(storedCount));
    } else {
      localStorage.setItem('count', 0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <div>
      <p>Customer: {count}</p>
    </div>
  );
}

export default Counter;