import React, {useCallback} from 'react';
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {changeNoteTextAC, NotesStateType, removeNoteAC} from "../../bll/notesReducer";
import {addTagAC} from "../../bll/tagsReducer";
import s from "./Note.module.scss";

type NotePropsType = {
    id: string
    noteText: string
    noteDate: string
    color: string
}

export const Note = React.memo(({id, noteText, noteDate, color}: NotePropsType) => {

    const notes = useSelector<AppRootStateType, NotesStateType>(state => state.notes
        .filter(n => n.id === id)[0])

    const dispatch = useDispatch();

    const onClickHandler = useCallback(() => dispatch(removeNoteAC(notes.id)), [notes.id, dispatch]);

    const onNoteChangeHandler = useCallback((newValue: string) => {
        dispatch(changeNoteTextAC(id, newValue));
        dispatch(addTagAC(newValue.trim()));
    }, [id, dispatch]);

    return (
        <div className={s.note} style={{backgroundColor: `${color}`}} key={id}>
            <EditableSpan value={noteText} onChange={onNoteChangeHandler}/>
            <div className={s.note__footer}>
                <FontAwesomeIcon
                    className={s.trash}
                    onClick={onClickHandler}
                    size="1x"
                    icon={faTrash}
                />
                <p className={s.note__data}>{noteDate}</p>
            </div>
        </div>
    )
});
