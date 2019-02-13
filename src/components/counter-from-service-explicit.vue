<template>
  <div>
    <h1>Component With Explicit Service</h1>
    <h3>{{countText}}</h3>
    <button @click="decrement">Decrement</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { countData, countComputed, countMethods } from '../services/counter';

const CounterFromServiceExplicit = {
  data() {
    return {
      count: countData.count,
    };
  },
  computed: {
    countText: countComputed.countText,
  },
  methods: {
    increment: countMethods.increment,
    decrement: countMethods.decrement,
  },
};

export default CounterFromServiceExplicit;
</script>
