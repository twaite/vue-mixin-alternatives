<template>
  <div>
    <h1>Counter With Mixin</h1>
    <h3>{{countText}}</h3>
    <button @click="decrement">Decrement</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import CounterMixin from '../mixins/counter-mixin';

const CounterWithMixin = {
  mixins: [CounterMixin]
}

export default CounterWithMixin;
</script>
