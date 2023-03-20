import React, { useContext, useState } from 'react';
import {
  addDoc, collection, CollectionReference, getDoc, doc, updateDoc,
} from 'firebase/firestore';
import { db } from 'src/config/firebase';
import { Note } from 'src/types/NoteType';
import Button from 'src/components/Button';
import { NoteContext } from 'src/contexts/NoteProvider';
import { NoteActionType } from 'src/contexts/noteReducer';
import { useNavigate } from 'react-router-dom';

interface Props {
  note?: Note;
}

const NoteForm: React.FC<Props> = ({ note }) => {
  const navigate = useNavigate();
  const [, dispatch] = useContext(NoteContext);
  const [title, setTitle] = useState<string>(note ? note.title : '');
  const [content, setContent] = useState<string>(note ? note.content : '');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (title.length > 0 && content.length > 0) {
      try {
        setLoading(true);

        if (note) {
          const docRef = doc(db, 'notes', note.id as string);

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
        } else {
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
        }

        navigate('/');
      } catch (e) {
        // TODO : Afficher une erreur à l'utilisateur
        console.error('Error adding document: ', e);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form className="flex flex-col">
      <label htmlFor="title">TITRE</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="border-2 border-black mb-2 p-2"
      />

      <label htmlFor="content">CONTENU</label>
      <textarea
        name="content"
        id="content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        className="border-2 border-black mb-2 p-2"
        rows={8}
      />

      <Button
        text={note ? 'Modifier' : 'Créer'}
        type="submit"
        loading={loading}
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </form>
  );
};

NoteForm.defaultProps = {
  note: undefined,
};

export default NoteForm;
