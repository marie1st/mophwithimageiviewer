import React from 'react'
import styles from './Input.module.css'


export const Dropdown = ({
  list = ['option1', 'option2', 'option3'],
  className,
  label,
  id,
}) => {
  const styleName = `${styles.wrapper} ${styles.sm} font-md weight-li ${className}`

  return (
    <>
      <label>{label}</label>
      <select className={styleName}>
        <option value="" disabled selected hidden>
          select
        </option>
        {list.map((items) => {
          return (
            <option value={items} className={`font-md weight-li`}>
              {items}
            </option>
          )
        })}
      </select>
    </>
  )
}