import React from "react"

export default props => {
  return (
    <aside>
      <button onClick={e => props.signout()}>Logout</button>
    </aside>
  )
}
