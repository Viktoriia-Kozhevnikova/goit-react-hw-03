// import React from 'react'
import s from '../Contact/Contact.module.css'
import { HiUser, HiPhone } from "react-icons/hi";

const Contact = ({name, number}) => {
  return (
    <div className={s.container}>
      <p className={s.text}>
        <HiUser className={s.icon} />
        {name}
      </p>
      <p className={s.text}>
        <HiPhone className={s.icon} />
        {number}
      </p>
      </div>
  )
}

export default Contact