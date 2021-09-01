import React from 'react'
import withLocal from './withLocal'
import withAjax from './withAjax'

function UserInput(props) {
  return (
    <div>
      <input defaultValue={props.value} />
    </div>
  )
}

let WithAjax = withAjax(UserInput)
let WithLocal = withLocal(WithAjax, 'username')

export default WithLocal
