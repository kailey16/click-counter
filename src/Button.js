import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button onClick={props.clicked}>Click me</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  )
}
