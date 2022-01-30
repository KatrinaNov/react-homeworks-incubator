const CHANGE_THEME = 'CHANGE_THEME'
export type ThemeType =  'dark' | 'green' | 'light'
type InitStateType = {
  theme: ThemeType
}
const initState: InitStateType = {
  theme: 'light'
};

type ActionType = ChangeThemeCType

export const themeReducer = (state = initState, action: ActionType): InitStateType => { // fix any
  switch (action.type) {
    case CHANGE_THEME: {
      return {...state, theme: action.payload.theme};
    }
    default:
      return state;
  }
};

type ChangeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: ThemeType) => {
  return {
    type: CHANGE_THEME,
    payload: {theme}
  } as const
};