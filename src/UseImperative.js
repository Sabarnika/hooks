import { forwardRef, useImperativeHandle, useState } from 'react';

const UseImperative = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <button>Button from Child</button>
      {toggle && <p>Hi</p>}
    </div>
  );
});
export default UseImperative;
