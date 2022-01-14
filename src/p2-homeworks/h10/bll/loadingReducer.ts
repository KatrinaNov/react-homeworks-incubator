export type InitialStateType = {
    isLoading: boolean
}

const initState: InitialStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET_IS_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}
type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => ({type: 'SET_IS_LOADING', isLoading} as const) // fix any