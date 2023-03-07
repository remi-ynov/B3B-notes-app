import React, { useContext, useEffect } from 'react';
import NoteItem from 'src/components/Notes/NoteItem';
import { Note } from 'src/types/NoteType';
import {
  collection, CollectionReference, getDocs, orderBy, query,
} from 'firebase/firestore';
import { db } from 'src/config/firebase';
import Loading, { LoadingColor } from 'src/components/Loading';
import { NoteContext } from 'src/contexts/NoteProvider';
import { NoteActionType } from 'src/contexts/noteReducer';

const NotesList: React.FC = () => {
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
