import React from 'react';

interface Props {
    text: string;
}

const Title: React.FC<Props> = ({ text }) => (
  <h1 className="text-4xl my-4">{text}</h1>
);

export default Title;
