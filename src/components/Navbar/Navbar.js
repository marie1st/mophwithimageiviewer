import React from 'react'
import styles from './Navbar.module.css'
import { AiFillAppstore } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import PropTypes from 'prop-types'


export const Navbar = ({ to }) => {
  const Spacer = require('react-spacer');
  return (
    <nav className={styles.wrapper}>
      <div className={styles.content}>
        <Link to={to} className="flex">
          <AiFillAppstore className={`font-xl ${styles.blue} mr-2`} />
          เมนูหลัก
        </Link>
        <div className={styles.profile}>
        <Link to={to} className="flex">
          <CgProfile />
          <Spacer width="12px" />Ruengrit
        </Link>
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
    to: PropTypes.string.isRequired
};