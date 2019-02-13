<template>
  <div>
    <h1>Component With Service Spread</h1>
    <h3>{{countText}}</h3>
    <button @click="decrement">Decrement</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { countData, countComputed, countMethods } from '../services/counter';

const CounterWithServiceSpread = {
  data() {
    return {
      ...countData,
    };
  },
  computed: {
    ...countComputed,
  },
  methods: {
    ...countMethods,
  },
};

export default CounterWithServiceSpread;
</script>
