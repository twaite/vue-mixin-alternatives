import { useData, useComputed } from 'vue-hooks';

export default function useCounter() {
  const data = useData({
    count: 0,
  });

  const countText = useComputed(() => `Count: ${data.count}`);

  function increment() {
    console.log('test');
    debugger;
    data.count++;
  }

  function decrement() {
    data.count--;
  }

  return {
    data,
    countText,
    increment,
    decrement,
  };
}
