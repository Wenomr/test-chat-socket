import React from 'react'
import Message from './Message'

// messages screen
const MessagesList = ({ props }) => {
  if (props) {
    return(
      <section id="messages">
        <ul>
          {props.map(message => (
            <Message
              key = {message.id}
              props = {message}
            />
            ))}
        </ul>
      </section>
    )
  } else {
    return(
      <section id="messages">
        <ul></ul>
      </section>
    )
  }
}

export default MessagesList;