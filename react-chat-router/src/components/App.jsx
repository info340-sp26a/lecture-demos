import React, {useState} from 'react';

import { Route, Routes } from 'react-router';

import { HeaderBar } from './HeaderBar.jsx';

import ChatPage from './ChatPage.jsx';
import SignInPage from './SignInPage.jsx';
import * as Static from './StaticPages.jsx';

import INITIAL_HISTORY from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //initialize;

  
  //STATE MANAGEMENT: how do we change?
  const addMessage = (userObj, messageText, channel) => {
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }
  
    const newArray = [...messageStateArray, newMessage];
    setMessageStateArray(newArray); //update state & re-render
  }

  const likeMessage = (timestamp) => {
    const updatedMessages = messageStateArray.map((msgObj) => {
      if(msgObj.timestamp == timestamp) {
        return {...msgObj, isLiked: !msgObj.isLiked}
      } else {
        return {...msgObj};
      }
    })

    setMessageStateArray(updatedMessages)
  }


  const changeUser = (newUserObj) => {
    setCurrentUser(newUserObj);
  }



  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <Routes>
        <Route path="/" element={ <Static.WelcomePage /> } />
        <Route path="/about" element={ <Static.AboutPage /> } />
        <Route path="/chat/:channelName/" element={ <ChatPage 
          currentUser={currentUser} 
          messageArray={messageStateArray}
          addMessageFunction={addMessage}
          likeMessageFunction={likeMessage}
          />
        } />
        <Route path="/signin" element={
          <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />
        } />
        <Route path="*" element= {<Static.ErrorPage />} />
      </Routes>

      {/* <Static.ErrorPage /> */}
    </div>
  );
}

export default App;