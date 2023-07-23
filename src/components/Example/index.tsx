import { useCount } from '@hooks/useCount';
import { theme } from '@styles/theme';
import React from 'react';
import { styled } from 'styled-components';
import BACK_IMAGE from '@assets/back.svg';

export default function Example() {
  const { count, increase } = useCount();
  return (
    <div>
      <span>{count}</span>
      <button onClick={increase}>올리기</button>
      <img src={BACK_IMAGE} alt="back" />
    </div>
  );
}

const Container = styled.div`
  z-index: ${theme.zIndex.header};
`;
