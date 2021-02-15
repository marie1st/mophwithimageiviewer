import React from 'react'
import styles from './Button.module.css'
import PropTypes from 'prop-types'
/**
 * Custom button that can customize the `color` and `size`.
 * Can also pass default button artributes as a props.
 */
export const Button = ({
  children,
  color = 'bAPPROVE',
  size = 'md',
  ...rest
}) => {
  const styleName = `${styles.wrapper} ${styles[color]} ${styles[size]}`

  return (
    <button className={styleName} {...rest}>
      {children}
    </button>
  )
}

Button.propsTypes ={
    children: PropTypes.element.isRequired,
    color: PropTypes.string,
    size: PropTypes.string
}