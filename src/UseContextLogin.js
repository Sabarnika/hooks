import { useContext } from 'react';
import { AppContext } from './App';
function UseContextLogin() {
  const { setName } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
    </div>
  );
}
export default UseContextLogin;
