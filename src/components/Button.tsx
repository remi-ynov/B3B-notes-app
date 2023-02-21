import React from 'react';

interface Props {
  onClick: (e: any) => void;
  text: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<Props> = ({ onClick, text, type }) => (
  <button
    className="bg-blue-500 p-4 text-white rounded-xl"
    onClick={onClick}
    type={type}
  >
    {text}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;
