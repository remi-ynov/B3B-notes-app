import React, { PropsWithChildren } from 'react';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const Modal: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children, show, setShow } = props;

  return (
    <div
      className="absolute top-0 left-0 bg-slate-500/75 w-screen h-screen"
      style={{ display: show ? 'block' : 'none' }}
    >
      <div className="absolute rounded bg-white p-20 shadow-neutral-500 shadow-md w-10/12 h-5/6 top-20 left-20 right-20 m-auto">
        <button
          className="absolute top-5 right-5"
          onClick={() => setShow(false)}
        >
          X
        </button>

        {children}
      </div>

    </div>
  );
};

export default Modal;
