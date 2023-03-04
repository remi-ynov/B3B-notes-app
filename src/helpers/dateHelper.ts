import { Timestamp } from '@firebase/firestore';

export const formatFirebaseDate = (timestamp: Timestamp) => {
  const date = timestamp.toDate();

  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
};
