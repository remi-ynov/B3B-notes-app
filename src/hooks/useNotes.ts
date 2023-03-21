import {
  addDoc,
  collection, CollectionReference, doc, getDoc, getDocs, orderBy, query, updateDoc,
} from 'firebase/firestore';
import { db } from 'src/config/firebase';
import { Note } from 'src/types/NoteType';
import { NoteActionType } from 'src/contexts/noteReducer';
import { useContext } from 'react';
import { NoteContext } from 'src/contexts/NoteProvider';

const useNotes = () => {
  const [, dispatch] = useContext(NoteContext);

  const getNotes = async () => {
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
  };

  const addNote = async (title: string, content: string) => {
    const docRef = await addDoc<Note>(collection(db, 'notes') as CollectionReference<Note>, {
      title,
      content,
      created_at: new Date(),
    });

    const docu = await getDoc(docRef);
    const data = docu.data();

    if (data) {
      dispatch({
        type: NoteActionType.ADD_NOTES,
        payload: {
          id: docu.id,
          ...data,
        },
      });
    }
  };

  const updateNote = async (noteId: string, title: string, content: string) => {
    const docRef = doc(db, 'notes', noteId as string);

    await updateDoc(docRef, {
      title,
      content,
    });

    const docu = await getDoc(docRef);
    const data = docu.data();

    if (data) {
      dispatch({
        type: NoteActionType.EDIT_NOTES,
        payload: {
          id: docu.id,
          ...data,
        },
      });
    }
  };

  return {
    getNotes,
    addNote,
    updateNote,
  };
};

export default useNotes;
