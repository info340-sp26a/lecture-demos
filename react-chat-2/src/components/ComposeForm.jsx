import React, { useState } from 'react';

import USERS from '../data/users.json';

export function ComposeForm(props) {
  const { currentChannel, addMessageFunction } = props;

  const [typedInput, setTypedInput] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submitting form with text", typedInput);
    addMessageFunction(USERS[1], typedInput, currentChannel);

    setTypedInput("");
  }

  const handleChange = (event) => {
    const changedValue = event.target.value;
    setTypedInput(changedValue);
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          onChange={handleChange}
          value={typedInput}
        />
        <button type="submit" className="btn btn-secondary">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}