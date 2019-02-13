<template>
  <div>
    <h1>Component Only</h1>
    <h3>{{countText}}</h3>
    <button @click="decrement">Decrement</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
const Counter = {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    countText() {
      return `Count: ${this.count}`;
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};

export default Counter;
</script>
