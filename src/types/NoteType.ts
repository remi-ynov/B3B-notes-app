import { Timestamp } from '@firebase/firestore';

export interface Note {
  id?: string;
  title: string;
  content: string;
  created_at: Date|Timestamp;
}
