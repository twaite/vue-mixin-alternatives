const CounterMixin = {
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

export default CounterMixin;