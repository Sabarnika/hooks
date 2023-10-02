import { useReducer, createContext, useRef, useState } from 'react';
import './App.css';
import UseEffect from './UseEffect';
import UseImperative from './UseImperative';
import UseLayout from './UseLayout';
import UseReducer from './UseReducer';
import UseState1 from './UseState1';
import UseState2 from './UseState2';
import UseState3 from './UseState3';
import UseContextLogin from './UseContextLogin';
import UseContextUser from './UseContextUser';
export const AppContext = createContext(null);
function App() {
  const ButtonRef = useRef(null);
  const [name, setName] = useState('');
  return (
    <div className="App">
      <UseState1 />
      <UseState2 />
      <UseState3 />
      <UseReducer />
      <UseEffect />
      <UseLayout />
      <h1>Using useImperativeHandle </h1>
      <button
        onClick={() => {
          ButtonRef.current.alterToggle();
        }}
      >
        Button from Parent
      </button>
      <UseImperative ref={ButtonRef} />
      <AppContext.Provider value={{ name, setName }}>
        <UseContextLogin />
        <UseContextUser />
      </AppContext.Provider>
    </div>
  );
}

export default App;
