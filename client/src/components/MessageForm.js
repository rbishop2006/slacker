import React, { useState, Component } from "react"
import { useChat } from "../hooks"
import FontPicker from "font-picker-react"
import "emoji-mart/css/emoji-mart.css"
import { Picker } from "emoji-mart"

export default props => {
  const { add } = useChat()
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [activeFontFamily, setActiveFontFamily] = useState("Open Sans")
  const [emoji, setEmoji] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (name !== "" && message !== "") {
      add({
        name,
        message
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <br />
        <div>
          <FontPicker
            apiKey="AIzaSyAF4fevVkxCZiirOk8bHsSy3EivcUgENQo"
            activeFontFamily={activeFontFamily}
            onChange={nextFont => setActiveFontFamily(nextFont.family)}
          />

          <textarea
            className="apply-font"
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>

          {/* <Picker
            className="emoji-mart"
            emoji={emoji}
            onSelect={emoji => setEmoji(emoji.addEmoji)}
            set="apple"
          /> */}
        </div>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}
