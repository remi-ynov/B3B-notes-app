import React, { useState } from 'react';
import {
  collection, addDoc, getDoc, CollectionReference,
} from 'firebase/firestore';
import { db } from 'src/config/firebase';
import { Note } from 'src/types/NoteType';
import Button from 'src/components/Button';

interface Props {
  addData: (note: Note) => void;
  close: () => void;
}

const NoteForm: React.FC<Props> = ({ addData, close }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const addNote = async () => {
    if (title.length > 0 && content.length > 0) {
      try {
        setLoading(true);
        const docRef = await addDoc<Note>(collection(db, 'notes') as CollectionReference<Note>, {
          title,
          content,
          created_at: new Date(),
        });

        const doc = await getDoc(docRef);
        const data = doc.data();

        if (data) {
          addData({
            id: doc.id,
            ...data,
          });
        }

        close();
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
        text="Créer"
        type="submit"
        loading={loading}
        onClick={(e) => {
          e.preventDefault();
          addNote();
        }}
      />
    </form>
  );
};

export default NoteForm;
