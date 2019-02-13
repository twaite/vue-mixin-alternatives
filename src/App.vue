<template>
  <div id="app">
    <counter/>
    <hr/>
    <counter-with-mixin/>
    <hr/>
    <counter-from-service-explicit/>
    <hr/>
    <counter-from-service-spread/>
    <hr/>
    <counter-with-hooks/>
    <hr/>
    <FunctionalCounterWithHooks/>
  </div>
</template>

<script>
import Counter from './components/counter';
import CounterWithMixin from './components/counter-with-mixin';
import CounterFromServiceExplicit from './components/counter-from-service-explicit';
import CounterFromServiceSpread from './components/counter-from-service-spread';
import CounterWithHooks from './components/counter-with-hooks';
import FunctionalCounterWithHooks from './components/functional-counter-with-hooks.jsx';

export default {
  name: 'app',
  components: {
    Counter,
    CounterWithMixin,
    CounterFromServiceExplicit,
    CounterFromServiceSpread,
    CounterWithHooks,
    FunctionalCounterWithHooks,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  --blue: #35495e;
}

hr {
  border-color: var(--blue);
}

button {
    color: var(--blue);
    border: 1px solid var(--blue);
    border-radius: 3px;
    font-size: 1em;
    padding: 0.5em;
    margin: 1em;
    background: none;
    font-weight: bold;
    cursor: pointer;
  }
</style>
