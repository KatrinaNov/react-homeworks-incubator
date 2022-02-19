import React from "react";
import s from "./HW13.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ThemeType} from "../h12/bll/themeReducer";
import Request from "./Request/Request";



function HW13() {
  const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme); // useSelector

    return (
        <div>
            <h3>
                homeworks 13
            </h3>
          <div>
            <Request/>
          </div>

        </div>
    );
}

export default HW13;
