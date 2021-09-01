import React from 'react'
import withLocal from './withLocal'

function EmailInput(props) {
  return (
    <div>
      <input defaultValue={props.value} />
    </div>
  )
}

let WithLocal = withLocal(EmailInput, 'email')

export default WithLocal
