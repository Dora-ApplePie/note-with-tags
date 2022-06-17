import {v1} from "uuid";

export type RemoveNoteActionType = {
    type: 'REMOVE-NOTE'
    payload: {
        noteId: string
    },
}

export type AddNoteActionType = {
    type: 'ADD-NOTE'
    payload: {
        text: string
        color: string
    },
}

export type ChangeNoteTextActionType = {
    type: 'CHANGE-NOTE'
    payload: {
        noteId: string
        text: string
    },
}


type ActionsType =
    RemoveNoteActionType
    | AddNoteActionType
    | ChangeNoteTextActionType


export type NotesStateType = {
    id: string,
    note: string,
    date: string
    color: string
}



export const initialState: NotesStateType[] = []

export const notesReducer = (state: NotesStateType[] = initialState, action: ActionsType): NotesStateType[] => {
    switch (action.type) {
        case 'REMOVE-NOTE': {
            return state.filter(n => n.id !== action.payload.noteId)
        }
        case 'ADD-NOTE': {
            return [{id: v1(), note: action.payload.text, date: new Date().toDateString(), color: action.payload.color}, ...state]
        }
        case 'CHANGE-NOTE': {
            const note = state.find(n => n.id === action.payload.noteId);
            if (note) {
                // если нашёлся - изменим ему текст
                note.note = action.payload.text;
            }
            return [...state]
        }
        default:
            return state
    }
}

export const removeNoteAC = (noteId: string): RemoveNoteActionType => {
    return {
        type: 'REMOVE-NOTE',
        payload: {
            noteId
        }
    }
}
export const addNoteAC = (text: string, color: string): AddNoteActionType => {
    return {
        type: 'ADD-NOTE',
        payload: {
            text,
            color
        }
    }
}

export const changeNoteTextAC = (noteId: string, text: string): ChangeNoteTextActionType => {
    return {
        type: 'CHANGE-NOTE',
        payload: {
            noteId, text
        }
    }
}