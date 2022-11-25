import React, {ChangeEvent, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faCheck} from "@fortawesome/free-solid-svg-icons";
import s from './EditableSpan.module.scss'


type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}


export const EditableSpan = React.memo(({value, onChange}: EditableSpanPropsType) => {

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }

    // useEffect(() => {
    //     dispatch(addTagAC(title));
    // }, [title]);

    return editMode
        ? <div className={s.edit}>
            <textarea placeholder={"Enter your note"}
                      className={s.edit__textarea + " custom-scroll"}
                      value={title}
                      onChange={changeTitle}
                      autoFocus
                      onBlur={activateViewMode}/>
            <FontAwesomeIcon
                onClick={activateViewMode}
                size="1x"
                icon={faCheck}
                className={s.edit__pen}
            /></div>
        : <div className={s.edit}><span className={s.edit__div} onDoubleClick={activateEditMode}>{value}</span>
            <FontAwesomeIcon
                onClick={activateEditMode}
                size="1x"
                icon={faPen}
                className={s.edit__pen}
            /></div>
})
