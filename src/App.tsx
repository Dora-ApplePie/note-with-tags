import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {NoteContainer} from "./components/NoteContainer/NoteContainer";
import Tags from "./components/Tags/Tags";
import {RemoveTagAC, TagsStateType} from "./bll/tagsReducer";
import {addNoteAC, NotesStateType} from "./bll/notesReducer";
import {AppRootStateType} from "./bll/store";
import './App.scss';

const App = React.memo(() => {

    const [filteredNotes, setFilteredNotes] = useState<NotesStateType[] | []>([]);

    const filterNotes = (tagName: string) => {
        const newNote = [...notes].filter(note =>
            note.note.includes(tagName)
        );
        setFilteredNotes(newNote);
    };

    const clearFilter = () => {
        setFilteredNotes([]);
    };

    const notes = useSelector<AppRootStateType, NotesStateType[]>(state => state.notes);
    const tags = useSelector<AppRootStateType, TagsStateType>(state => state.tags);
    const dispatch = useDispatch();

    const addNote = useCallback((note: string, color: string) => {
        dispatch(addNoteAC(note, color))
    }, [dispatch])

    const deleteTag = useCallback((tagName: string) => {
        dispatch(RemoveTagAC(tagName))
    }, [dispatch])

    return (
        <div className="App">
            <Sidebar addItem={addNote}/>
            <NoteContainer
                notes={filteredNotes.length ? filteredNotes : notes}
            />
            <Tags
                filterNotes={filterNotes}
                tags={tags}
                deleteTag={deleteTag}
                clearFilter={clearFilter}
            />
        </div>
    )
})

export default App;
