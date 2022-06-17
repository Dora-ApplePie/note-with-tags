import {combineReducers, createStore} from "redux";
import {notesReducer} from "./notes-reducer";
import {loadState, saveState} from "../utils/localstorage";
import {tagsReducer} from "./tags-reducer";

const rootReducer = combineReducers({
    notes: notesReducer,
    tags: tagsReducer
})


export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        notes: store.getState().notes,
        tags: store.getState().tags
    })
});

export type AppStoreType = typeof store
export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;