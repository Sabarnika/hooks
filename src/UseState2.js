import { useState } from 'react';

function UseState2() {
  const [value, setValue] = useState('Enter Name');
  const func = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };
  return (
    <div>
      <h1>Value changing in forms using useState</h1>
      <input placeholder="enter ur name" onChange={func} />
      {value}
    </div>
  );
}
export default UseState2;
