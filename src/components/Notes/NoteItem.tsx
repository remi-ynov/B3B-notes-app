import React from 'react';
import { Note } from 'src/types/NoteType';

interface Props {
  note: Note;
}

const NoteItem: React.FC<Props> = ({ note }) => (
  <div className="shadow-md bg-gradient-to-br from-amber-200 to-amber-300 p-4 mr-4 mb-4 text-gray-700">
    <div className="text-xl">{note.title}</div>
    <p>{note.content}</p>
  </div>
);

export default NoteItem;
