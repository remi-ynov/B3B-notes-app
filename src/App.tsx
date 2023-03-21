import { NoteContext } from 'src/contexts/NoteProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from 'src/config/router';
import { useContext, useEffect } from 'react';
import Loading, { LoadingColor } from 'src/components/Loading';
import useNotes from 'src/hooks/useNotes';

const App = () => {
  const [state] = useContext(NoteContext);
  const { getNotes } = useNotes();

  useEffect(() => {
    getNotes();
  }, []);

  if (state.loading) {
    return <Loading color={LoadingColor.PURPLE} />;
  }

  return (
    <RouterProvider router={router} />
  );
};

export default App;
