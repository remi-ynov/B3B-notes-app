import React, {
  createContext, Dispatch, PropsWithChildren, useReducer,
} from 'react';
import {
  initialNoteState, NoteActionType, noteReducer, NoteState,
} from 'src/contexts/noteReducer';
import { Action } from 'src/types/ActionType';

export const NoteContext = createContext<[NoteState, Dispatch<Action<NoteActionType>>]>([
  initialNoteState,
  () => null,
]);

const NoteProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, initialNoteState);

  return (
    <NoteContext.Provider value={[state, dispatch]}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
