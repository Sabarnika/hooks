import { useEffect, useLayoutEffect, useRef } from 'react';

function UseLayout() {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  useEffect(() => {
    inputRef.current.value = 'Hello';
  });
  return (
    <div>
      <h1>Using useLayoutEffect and useRef</h1>
      <input ref={inputRef} value="Hi" />
    </div>
  );
}
export default UseLayout;
