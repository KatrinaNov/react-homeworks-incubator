import React from 'react'
import s from './Message.module.css'

type MessageType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessageType) {
  return (
    <div className={s.message}>
      <div className={s.image}>
        <img src={props.avatar} alt=""/>
      </div>
      <div className={s.text}>
        <span className={s.author}>{props.name}</span>
        <p>{props.message}</p>
        <span className={s.time}>{props.time}</span>
      </div>
    </div>
  )
}

export default Message
