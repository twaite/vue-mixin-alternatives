export const countData = {
  count: 0,
};

export const countComputed = {
  countText() {
    return `Count: ${this.count}`;
  },
};

export const countMethods = {
  increment() {
    this.count++;
  },

  decrement() {
    this.count--;
  },
};

const CounterService = {
  countData,
  countComputed,
  countMethods,
};

export default CounterService;
