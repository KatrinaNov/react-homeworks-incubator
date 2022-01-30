import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";
import SuperSelect from "../../../p2-homeworks/h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../p2-homeworks/h10/bll/store";
import {changeThemeC, ThemeType} from "../../../p2-homeworks/h12/bll/themeReducer";

function App() {
  const themes = ['light', 'dark', 'green'];
  const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme); // useSelector

  const dispatch = useDispatch();
  // useDispatch, onChangeCallback
  const onChangeOption = (theme : ThemeType) => {
    dispatch(changeThemeC(theme))
  }

  return (
    <div className={`${s.App} ${s['App-' + theme]}`}>
      <SuperSelect
        options={themes}
        value={theme}
        onChangeOption={onChangeOption}
      />
      <h2 className={s['title-' + theme]}>react homeworks:</h2>

      {/*<HW1/>*/}
      {/*<HW2/>*/}
      {/*<HW3/>*/}
      {/*<HW4/>*/}
      <HW5/>

    </div>
  )
}

export default App
