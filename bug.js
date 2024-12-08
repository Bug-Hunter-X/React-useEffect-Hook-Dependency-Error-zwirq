```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render.
    console.log('Count:', count); // This will log 0, then 1, then 2, etc.
    return () => {
      console.log('Cleanup!'); // This will run before the next effect runs, but only after the first render
    };
  }, [count]); // Add 'count' as a dependency

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
export default MyComponent; 
```