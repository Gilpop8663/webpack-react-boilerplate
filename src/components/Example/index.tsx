import { useCount } from '@hooks/useCount';
import React from 'react';

export default function Example() {
  const { count, increase } = useCount();
  return (
    <div>
      <span>{count}</span>
      <button onClick={increase}>올리기</button>
    </div>
  );
}
