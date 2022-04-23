import React from 'react';

import './styles.css';

interface Props {
  caption: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Component: React.FC<Props> = ({caption, onClick}) => {
  return (
    <div
      className='button'
      onClick={onClick}
    >
      {caption}
    </div>
  )
};

export const Button = React.memo(Component);