<template>
  <div>
    <h1>Component With Explicit Service</h1>
    <h3>{{countText}}</h3>
    <button @click="decrement()">Decrement</button>
    <button @click="increment()">Increment</button>
  </div>
</template>

<script>
import useCounter from '../hooks/counter-hook';

const CounterWithHooks = {
  hooks() {
    return useCounter();
  },
};

export default CounterWithHooks;
</script>
