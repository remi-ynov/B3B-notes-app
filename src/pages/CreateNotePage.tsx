import React from 'react';
import NoteForm from 'src/components/Notes/NoteForm';
import Title from 'src/components/Title';

const CreateNotePage: React.FC = () => (
  <>
    <Title text="Créer une note" />
    <NoteForm />
  </>
);

export default CreateNotePage;
