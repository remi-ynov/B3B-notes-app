import React, { useState } from 'react';
import Button from 'src/components/Button';
import Modal from 'src/components/Modal';
import NoteForm from 'src/components/Notes/NoteForm';

const OpenModalButton: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Button text="Créer une note" onClick={() => setShow(true)} />

      <Modal show={show} setShow={setShow}>
        <NoteForm close={() => setShow(false)} />
      </Modal>
    </>
  );
};

export default OpenModalButton;
