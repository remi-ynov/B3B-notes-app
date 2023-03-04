import React from 'react';
import Loading from 'src/components/Loading';

interface Props {
  onClick: (e: any) => void;
  text: string;
  type?: 'submit' | 'reset' | 'button';
  loading?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const {
    onClick, text, type, loading,
  } = props;

  return (
    <button
      className="bg-blue-500 p-4 text-white rounded-xl flex justify-center"
      onClick={onClick}
      type={type}
      disabled={loading}
    >
      {loading ? <Loading /> : text}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  loading: false,
};

export default Button;
