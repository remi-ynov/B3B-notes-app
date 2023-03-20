import { NoteContext } from 'src/contexts/NoteProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from 'src/config/router';
import { useContext, useEffect } from 'react';
import {
  collection, CollectionReference, getDocs, orderBy, query,
} from 'firebase/firestore';
import { db } from 'src/config/firebase';
import { Note } from 'src/types/NoteType';
import { NoteActionType } from 'src/contexts/noteReducer';
import Loading, { LoadingColor } from 'src/components/Loading';

const App = () => {
  const [state, dispatch] = useContext(NoteContext);

  useEffect(() => {
    const q = query(
      collection(db, 'notes') as CollectionReference<Note>,
      orderBy('created_at', 'desc'),
    );

    getDocs(q)
      .then((querySnapshot) => {
        dispatch({
          type: NoteActionType.SET_NOTES,
          payload: querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })),
        });
      })
      .catch((e) => console.error('TODO : Afficher une erreur à l\'utilisateur', e))
      .finally(() => dispatch({
        type: NoteActionType.SET_LOADING,
        payload: false,
      }));
  }, []);

  if (state.loading) {
    return <Loading color={LoadingColor.PURPLE} />;
  }

  return (
    <RouterProvider router={router} />
  );
};

export default App;
