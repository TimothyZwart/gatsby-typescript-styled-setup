import React, { Component, createRef, RefObject } from "react"

export default class NameForm extends Component {
  nameRef: RefObject<HTMLInputElement> = createRef()

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (this.nameRef.current) {
      alert(this.nameRef.current.value)
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.nameRef} name="" id="" />
        <button>Submit</button>
      </form>
    )
  }
}
