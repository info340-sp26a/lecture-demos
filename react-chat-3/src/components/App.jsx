import React, { useState } from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelList } from './ChannelList.jsx';
import { ChatPane } from './ChatPane.jsx';

import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const channelNames = ["general", "social", "birds", "channel-4", "random"]

  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1])
  const [currentChannelState, setCurrentChannelState] = useState("general");
  //const currentChannel = "general"

  const changeChannel = (whichChannel) => {
    //if admin channel, don't change
    //update the state and rerender
    setCurrentChannelState(whichChannel);
  }

  const changeUser = (whichUser) => {
    setCurrentUser(whichUser);
  }

  
  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} changeUser={changeUser} />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList channelNames={channelNames} currentChannel={currentChannelState} changeChannelFunction={changeChannel} />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane currentChannel={currentChannelState} currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default App;