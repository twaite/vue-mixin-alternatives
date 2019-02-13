import { useData, useComputed, useState } from 'vue-hooks';

export default function useCounter() {
  const data = useData({
    count: 0,
  });

  const countText = useComputed(() => `Count: ${data.count}`, [data.count]);

  const increment = () => { data.count++ }

  const decrement = () => { data.count-- }

  return {
    data,
    countText,
    increment,
    decrement,
  };
}
