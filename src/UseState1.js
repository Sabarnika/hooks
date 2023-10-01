import { useState } from 'react';
function UseState1() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Counter using useState</h2>
      {count}
      <button onClick={increment}>INCREMENT</button>
    </div>
  );
}
export default UseState1;
