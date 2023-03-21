import React, { useState } from 'react';
import { Note } from 'src/types/NoteType';
import Button from 'src/components/Button';
import useNotes from 'src/hooks/useNotes';
import { useNavigate } from 'react-router-dom';

interface Props {
  note?: Note;
}

const NoteForm: React.FC<Props> = ({ note }) => {
  const [title, setTitle] = useState<string>(note ? note.title : '');
  const [content, setContent] = useState<string>(note ? note.content : '');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string|null>(null);
  const navigate = useNavigate();
  const {
    addNote, updateNote,
  } = useNotes();

  const handleSubmit = async () => {
    if (title.length > 0 && content.length > 0) {
      try {
        setLoading(true);
        if (note) {
          await updateNote(note.id as string, title, content);
        } else {
          await addNote(title, content);
        }
        navigate('/');
      } catch (e: any) {
        setError(e.message);
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
