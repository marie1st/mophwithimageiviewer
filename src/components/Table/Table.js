import React from 'react'
import { Accordion } from 'react-bootstrap'
import styles from './Table.module.css'
import {PropTypes} from 'prop-types'

const Container = ({ children, className }) => {
  return <table className={`${styles.table} ${className}`}>{children}</table>
}

const Header = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header} className={styles.header}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  )
}

const Body = ({ children }) => {
  return <tbody>{children}</tbody>
}

const Row = ({ children, content }) => {
  return (
    <Accordion.Container contentDetail={content}>
      {children}
    </Accordion.Container>
  )
}

const Col = ({ children }) => {
  return <Accordion.Col>{children}</Accordion.Col>
}

export const Table = {
  Container,
  Header,
  Body,
  Row,
  Col,
}

Col.propTypes= {
    children: PropTypes.element.isRequired
};

Row.propsTypes={
    children: PropTypes.element.isRequired,
    content: PropTypes.string
}

Body.propsTypes={
    children: PropTypes.element.isRequired
}

Header.propsTypes={
    headers: PropTypes.string
}

Container.propsTypes={
    children: PropTypes.element.isRequired,
    className: PropTypes.string
}