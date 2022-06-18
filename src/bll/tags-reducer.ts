export type RemoveTagActionType = {
    type: 'REMOVE-TAG'
    payload: {
        tagName: string
    },
}
export type AddTagActionType = {
    type: 'ADD-TAG'
    payload: {
        textNote: string
    },
}

type ActionsType = RemoveTagActionType | AddTagActionType

export type TagsStateType = string[]

const initialTagsState: TagsStateType = []

export const tagsReducer = (state: TagsStateType = initialTagsState, action: ActionsType): TagsStateType => {
    switch (action.type) {
        case 'REMOVE-TAG': {
            return state.filter(tag => tag !== action.payload.tagName)
        }
        case 'ADD-TAG': {
            let copyState = [...state];
            action.payload.textNote.split(" ").forEach((word: string) => word[0] === "#" && !state?.includes(word.split(/[;.,:'%$!?()]/g)[0]) ? copyState.push(word.split(/[.,;%$:'!?()]/g)[0]) : copyState);
            return copyState
        }
        default:
            return state
    }
}

export const RemoveTagAC = (tagName: string): RemoveTagActionType => {
    return {
        type: 'REMOVE-TAG',
        payload: {
            tagName
        }
    }
}
export const addTagAC = (textNote: string): AddTagActionType => {
    return {
        type: 'ADD-TAG',
        payload: {
            textNote
        }
    }
}



