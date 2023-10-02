import { useContext } from 'react';
import { AppContext } from './App';
function UseContextUser() {
  const { name } = useContext(AppContext);
  return <div>User:{name}</div>;
}
export default UseContextUser;
