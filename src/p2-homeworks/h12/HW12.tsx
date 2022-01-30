import React from "react";
import s from "./HW12.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ThemeType} from "./bll/themeReducer";


function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme); // useSelector


    return (
        <div className={s[theme]}>
            <h3 className={s[theme + '-text']}>
                homeworks 12
            </h3>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

        </div>
    );
}

export default HW12;
