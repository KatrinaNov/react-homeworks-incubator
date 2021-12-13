import React from 'react'
import s from './Error.module.css'

function Error404() {
  return (
    <div className={s.page404}>
      <div className={s.number}>404</div>
      <div>Sorry, page not found!</div>
    </div>
  )
}

export default Error404
