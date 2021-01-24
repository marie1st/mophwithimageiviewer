import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import styles from './Layout.module.css'
import PropTypes from 'prop-types';

/**
 * Assign type of props to Layout component
 */


export const Layout = ({ children, user_name, user_id }) => {
  return (
    <>
      <Navbar to="/admin" />
      <div className={styles.page}>{children}</div>
    </>
  )
}

Layout.propTypes= {
    children: PropTypes.element.isRequired,
    user_name: PropTypes.string,
    user_id: PropTypes.number
  };