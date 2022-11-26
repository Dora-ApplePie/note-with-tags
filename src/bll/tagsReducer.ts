const initialTagsState: TagsStateType = []

export const tagsReducer = (state: TagsStateType = initialTagsState, action: ActionsType): TagsStateType => {
    switch (action.type) {
        case 'REMOVE-TAG': {
            return state.filter(tag => tag !== action.payload.tagName)
        }
        case 'ADD-TAG': {
            let copyState = [...state];
            action.payload.tags.forEach((tag) => {
                if (!copyState.includes(tag)) {
                    copyState.push(tag);
                }
            });
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
export const addTagAC = (tags: Array<string>): AddTagActionType => {
    return {
        type: 'ADD-TAG',
        payload: {
            tags
        }
    }
}

export type RemoveTagActionType = {
    type: 'REMOVE-TAG'
    payload: {
        tagName: string
    },
}
export type AddTagActionType = {
    type: 'ADD-TAG'
    payload: {
        tags: Array<string>
    },
}

type ActionsType = RemoveTagActionType | AddTagActionType

export type TagsStateType = string[]



