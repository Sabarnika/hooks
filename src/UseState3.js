import { useState } from 'react';
function UseState3() {
  const [value, setValue] = useState(true);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Another Example in UseState</h1>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
          setValue(!value);
        }}
      >
        INCREMENT
      </button>
      {value && <p>I am appearing</p>}
    </div>
  );
}
export default UseState3;
