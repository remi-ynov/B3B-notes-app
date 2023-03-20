import React, { useContext } from 'react';
import NoteItem from 'src/components/Notes/NoteItem';
import Loading, { LoadingColor } from 'src/components/Loading';
import { NoteContext } from 'src/contexts/NoteProvider';

const NotesList: React.FC = () => {
  const [state] = useContext(NoteContext);

  if (state.loading) {
    return (
      <div className="my-8">
        <Loading color={LoadingColor.PURPLE} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4 my-4">
      {state.notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
