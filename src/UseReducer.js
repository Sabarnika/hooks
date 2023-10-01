import { useReducer } from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
        value: state.value,
      };
    case 'toggleShowText':
      return {
        count: state.count,
        value: !state.value,
      };
    default:
      return state;
  }
};
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    value: true,
  });
  return (
    <div>
      <h1>Same Eg on UseReducer</h1>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
          dispatch({ type: 'toggleShowText' });
        }}
      >
        INCREMENT
      </button>
      {state.value && <p>I am appearing</p>}
    </div>
  );
}
export default UseReducer;
