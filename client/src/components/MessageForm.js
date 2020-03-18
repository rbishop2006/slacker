import React, { useState } from "react"
import { useChat } from "../hooks"
import { Form, Input } from "semantic-ui-react"

export default props => {
  const [message, setMessage] = useState("")
  const { add } = useChat()

  function handleSubmit(e) {
    e.preventDefault()

    add({
      user: props.username,
      msg: message,
      timestamp: new Date().getTime()
    })
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={e => setMessage(e.target.value)}
          action="Submit"
          placeholder="Enter your message..."
        />
      </Form>
    </div>
  )
}

// import FontPicker from "font-picker-react"
// import "emoji-mart/css/emoji-mart.css"
// import { Picker } from "emoji-mart"

// export default props => {
//   const { add } = useChat()
//   const [name, setName] = useState("")
//   const [message, setMessage] = useState("")
//   const [activeFontFamily, setActiveFontFamily] = useState("Open Sans")
//   const [emoji, setEmoji] = useState("")

//   function handleSubmit(e) {
//     e.preventDefault()
//     if (name !== "" && message !== "") {
//       add({
//         name,
//         message
//       })
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={e => setName(e.target.value)}
//           placeholder="Enter your name"
//         />
//         <br />
//         <div>
//           <FontPicker
//             apiKey="AIzaSyAF4fevVkxCZiirOk8bHsSy3EivcUgENQo"
//             activeFontFamily={activeFontFamily}
//             onChange={nextFont => setActiveFontFamily(nextFont.family)}
//           />
//           <p className="apply-font">The font will be applied to this text.</p>

//           <textarea
//             className="apply-font"
//             value={message}
//             onChange={e => setMessage(e.target.value)}
//           ></textarea>

//           {/* <Picker
//             className="emoji-mart"
//             emoji={emoji}
//             onSelect={emoji => setEmoji(emoji.addEmoji)}
//             set="apple"
//           /> */}
//         </div>
//         <br />
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   )
// }
