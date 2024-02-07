import React from 'react'

const Photo = (props) => {
  return (
    <div>
        <img src={props.photoName} />
    </div>
  )
}

export default Photo