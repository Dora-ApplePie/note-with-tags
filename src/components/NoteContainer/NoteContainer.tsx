import React from 'react';
import {NotesStateType} from "../../bll/notes-reducer";
import {Note} from "../Note/Note";
import s from './NoteContainer.module.scss'


type NoteContainerPropsType = {
    notes: NotesStateType[]
}

export const NoteContainer = React.memo(({notes}: NoteContainerPropsType) => {
    const classes = s.note__container + " custom-scroll";
    return (
        <div className={s.container}>

            <h1>Colored Notes</h1>

            <div className={classes}>
                {notes?.length ? (
                    notes.map(note => (
                        <Note
                            key={note.id}
                            id={note.id}
                            noteText={note.note}
                            noteDate={note.date}
                            color={note.color}
                        />
                    ))
                ) : (
                    <h2>Not notes</h2>
                )}

            </div>
        </div>
    )
});
