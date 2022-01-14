import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
          setDate(new Date())
            // setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
      setShow(true)
    }
    const onMouseLeave = () => {
        // close
      setShow(false)
    }

    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = date.toLocaleDateString() // fix with date

    return (
        <div>
           <div className={styles.a}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
           >
             <div className={styles.b}>
               <div className={styles.c}>
                 <div className={styles.time}>
                   {stringTime}
                 </div>
                 {show && (
                   <div className={styles.date}>
                     {stringDate}
                   </div>
                 )}
               </div>
             </div>
             </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
