import React, { useContext } from 'react';
import Title from 'src/components/Title';
import NoteForm from 'src/components/Notes/NoteForm';
import { useParams } from 'react-router-dom';
import { NoteContext } from 'src/contexts/NoteProvider';

interface Props {

}

const EditNotePage: React.FC<Props> = (props) => {
  const { id } = useParams<{ id: string }>();
  const [state] = useContext(NoteContext);
  const note = state.notes.find((n) => n.id === id);

  return (
    <>
      <Title text="Édition" />

      {
        note === undefined
          ? <div>Note introuvable</div>
          : <NoteForm note={note} />
      }
    </>
  );
};

export default EditNotePage;
