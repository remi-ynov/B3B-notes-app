import React from 'react';
import NoteItem from 'src/components/Notes/NoteItem';
import { Note } from 'src/types/NoteType';

interface Props {
  data: Note[]
}

const NotesList: React.FC<Props> = ({ data }) => (
  <div className="flex flex-wrap my-4">
    {data.map((note) => (
      <NoteItem key={note.id} note={note} />
    ))}
  </div>
);

export default NotesList;
