import React from 'react';
import Title from 'src/components/Title';
import NotesList from 'src/components/Notes/NotesList';
import { Link } from 'react-router-dom';

const NotesPage: React.FC = () => (
  <div className="container mx-auto">
    <Title text="Notes App" />

    <Link to="/notes/new">
      Créer une note
    </Link>

    <NotesList />
  </div>
);

export default NotesPage;
