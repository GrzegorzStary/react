import React from 'react'

function ConditionalRenderingFunctional(props) {
  return (
    <div>
        <h1>
            {props.connected ? 'User is connected' : 'User is not connected'}
        </h1>
    </div>
  )
}

export default ConditionalRenderingFunctional 