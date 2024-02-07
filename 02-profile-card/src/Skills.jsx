import React from 'react'
import './Skills.css'

const Skills = (props) => {
  return (
    <button className={props.className}>
        {props.skill}
    </button>
  )
}

export default Skills