// import React from 'react'
import s from '../SearchBox/SearchBox.module.css'
import { useId } from "react";

const SearchBox = ({ handleSearchChange, searchContact }) => {
  const id = useId();
  return (
    <div className={s.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        type="text" 
        value={searchContact}
        onChange={handleSearchChange}
        id={id}
        className={s.input} />
    </div>
  )
}

export default SearchBox;
