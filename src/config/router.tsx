import { createBrowserRouter } from 'react-router-dom';
import NotesPage from 'src/pages/NotesPage';
import NoteLayout from 'src/components/Layout/NoteLayout';
import CreateNotePage from 'src/pages/CreateNotePage';
import EditNotePage from 'src/pages/EditNotePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NotesPage />,
  },
  {
    path: '/notes',
    element: <NoteLayout />,
    children: [
      {
        path: 'new',
        element: <CreateNotePage />,
      },
      {
        path: ':id',
        element: <EditNotePage />,
      },
    ],
  },
]);
