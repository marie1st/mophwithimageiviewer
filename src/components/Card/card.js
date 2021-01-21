import React from 'react'
import styles from './Card.module.css'
import PropTypes from 'prop-types'



const Container = ({
  children,
  className,
  fullHeight,
  noShadow,
}) => {
  return (
    <div
      className={`${styles.wrapper} ${className} ${
        fullHeight && styles['full-height']
      } ${noShadow && styles['noShadow']}`}
    >
      {children}
    </div>
  )
}

const Header = ({ children, className }) => {
  return <div className={`${styles.header} ${className}`}>{children}</div>
}

const Body = ({ children, className }) => {
  return <div className={`${styles.body} ${className}`}>{children}</div>
}

const Footer = ({ children, className }) => {
  return <div className={`${styles.footer} ${className}`}>{children}</div>
}

const Col = ({ children, className }) => {
  return <div className={`${styles.headerColumn} ${className}`}>{children}</div>
}

export const Card = {
  Container,
  Header,
  Body,
  Footer,
  Col,
}

Col.propTypes= {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired
};

Footer.propTypes={
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  fullHeight: PropTypes.bool,
  noShodow: PropTypes.bool
}

Body.propTypes={
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  fullHeight: PropTypes.bool,
  noShodow: PropTypes.bool
}

Header.propTypes={
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  fullHeight: PropTypes.bool,
  noShodow: PropTypes.bool
}

Container.propTypes={
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  fullHeight: PropTypes.bool,
  noShodow: PropTypes.bool
}