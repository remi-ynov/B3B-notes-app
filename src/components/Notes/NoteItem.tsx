import React from 'react';
import { Note } from 'src/types/NoteType';
import { formatFirebaseDate } from 'src/helpers/dateHelper';
import { Timestamp } from '@firebase/firestore';

interface Props {
  note: Note;
}

const NoteItem: React.FC<Props> = ({ note }) => (
  <div className="shadow-md rounded bg-gradient-to-br from-amber-200 to-amber-300 p-4 text-gray-700 h-60 flex flex-col justify-between">
    <div>
      <div className="text-2xl font-bold">{note.title}</div>
      <p className="max-h-36 overflow-auto">{note.content}</p>
    </div>

    <p className="italic self-end text-gray-500">
      {formatFirebaseDate(note.created_at as Timestamp)}
    </p>
  </div>
);

export default NoteItem;
