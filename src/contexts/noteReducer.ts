import { Note } from 'src/types/NoteType';
import { Action } from 'src/types/ActionType';

export enum NoteActionType {
  SET_NOTES = 'SET_NOTES',
  ADD_NOTES = 'ADD_NOTES',
  SET_LOADING = 'SET_LOADING',
}

export interface NoteState {
  notes: Note[];
  loading: boolean;
}

export const initialNoteState: NoteState = {
  notes: [],
  loading: true,
};

export const noteReducer = (state: NoteState, action: Action<NoteActionType>) => {
  switch (action.type) {
    case NoteActionType.SET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    case NoteActionType.ADD_NOTES:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case NoteActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
