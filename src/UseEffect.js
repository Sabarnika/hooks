import { useEffect, useState } from 'react';
import axios from 'axios';
function UseEffect() {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[0].name);
        console.log('API was Called');
      });
  }, []);
  return (
    <div>
      <h2>Hi {data} using useEffect</h2>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}
export default UseEffect;
