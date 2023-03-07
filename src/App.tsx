import NotesList from 'src/components/Notes/NotesList';
import OpenModalButton from 'src/components/OpenModalButton';
import Title from 'src/components/Title';
import NoteProvider from 'src/contexts/NoteProvider';

const App = () => (
  <NoteProvider>
    <div className="container mx-auto">
      <Title text="Notes App" />

      <OpenModalButton />
      <NotesList />
    </div>
  </NoteProvider>
);

export default App;
