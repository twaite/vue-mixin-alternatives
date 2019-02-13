import { withHooks } from 'vue-hooks';
import useCounter from '../hooks/counter-hook';

const FunctionalCounterWithHooks = withHooks((h) => {
  const { countText, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Functional Component With Hooks</h1>
      <h3>{countText}</h3>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
});

export default FunctionalCounterWithHooks;
