import React from 'react'
import { Button } from './Buttons.elements'

const StyledButton = (props) => {
  return (
    <Button
      color={props.color}
      size={props.size}
      variant={props.variant}
      disableShadow={props.disableShadow}
      disabled={props.disabled}
    >
      {
        props.startIcon && <Icon iconName={props.startIcon} right />
      }
      {props.children}
      {
        props.endIcon && <Icon iconName={props.endIcon} left />
      }
    </Button>
  )
}

export default StyledButton

const Icon = ({ iconName, left, right }) => {
  return <i class="material-icons"
    style={{
      color: "#fff",
      fontSize: "14px",
      marginRight: `${right ? "5px" : "0"}`,
      marginLeft: `${left ? "5px" : "0"}`
    }}>
    {iconName}
  </i>
}
