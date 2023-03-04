import { useEffect, useState } from 'react';
import {
  collection, CollectionReference, getDocs, query, orderBy,
} from 'firebase/firestore';
import NotesList from 'src/components/Notes/NotesList';
import OpenModalButton from 'src/components/OpenModalButton';
import { Note } from 'src/types/NoteType';
import { db } from 'src/config/firebase';
import Title from 'src/components/Title';
import Loading, { LoadingColor } from 'src/components/Loading';

const App = () => {
  const [data, setData] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const q = query(collection(db, 'notes') as CollectionReference<Note>, orderBy('created_at', 'desc'));
    getDocs(q)
      .then((querySnapshot) => {
        setData(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })),
        );
      })
      .catch((e) => console.error('TODO : Afficher une erreur à l\'utilisateur', e))
      .finally(() => setLoading(false));
  }, []);

  const addData = (note: Note) => {
    setData([...data, note]);
  };

  return (
    <div className="container mx-auto">
      <Title text="Notes App" />

      <OpenModalButton addData={addData} />

      {loading
        ? (
          <div className="my-8">
            <Loading color={LoadingColor.PURPLE} />
          </div>
        ) : <NotesList data={data} />}
    </div>
  );
};

export default App;
