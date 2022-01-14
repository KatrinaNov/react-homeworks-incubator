import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import Preloader from "./Preloader/Preloader";

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch();
    // useSelector, useDispatch
    // const loading = false

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        console.log('loading...')
    };

    return (
        <div>
            <h3>homeworks 10</h3>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <Preloader/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10
