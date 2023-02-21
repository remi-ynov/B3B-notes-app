import React, { useState } from 'react';
import Button from 'src/components/Button';
import Modal from 'src/components/Modal';
import NoteForm from 'src/components/Notes/NoteForm';
import { Note } from 'src/types/NoteType';

interface Props {
  addData: (note: Note) => void;
}

const OpenModalButton: React.FC<Props> = ({ addData }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Button text="Créer une note" onClick={() => setShow(true)} />

      <Modal show={show} setShow={setShow}>
        <NoteForm addData={addData} close={() => setShow(false)} />
      </Modal>
    </>
  );
};

export default OpenModalButton;
