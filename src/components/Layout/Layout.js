import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import styles from './Layout.module.css'
import PropTypes from 'prop-types';

/**
 * Assign type of props to Layout component
 */


export const Layout = ({ children }) => {
  return (
    <>
      <Navbar to="/shop" />
      <div className={styles.page}>{children}</div>
    </>
  )
}

Layout.propTypes= {
    children: PropTypes.element.isRequired
  };