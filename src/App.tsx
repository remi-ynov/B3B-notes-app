import NotesList from 'src/components/Notes/NotesList';
import OpenModalButton from 'src/components/OpenModalButton';
import { useState } from 'react';
import { Note } from 'src/types/NoteType';

const initialData: Note[] = [
  {
    id: '1',
    title: 'Test 1',
    content: 'Content 1',
    created_date: new Date(),
  },
  {
    id: '2',
    title: 'Test 2',
    content: 'Content 2',
    created_date: new Date(),
  },
  {
    id: '3',
    title: 'Test 3',
    content: 'Content 3',
    created_date: new Date(),
  },
  {
    id: '4',
    title: 'Test 4',
    content: 'Content 4',
    created_date: new Date(),
  },
];

const App = () => {
  const [data, setData] = useState<Note[]>(initialData);

  const addData = (note: Note) => {
    setData([...data, note]);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl my-4">Notes App</h1>

      <OpenModalButton addData={addData} />
      <NotesList data={data} />
    </div>
  );
};

export default App;
