import React from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelList } from './ChannelList.jsx';
import { MessageBoard } from './MessageBoard.jsx';

function App(props) {
  return (
    <div className="container-fluid">
      <HeaderBar />
      <div className="row">
        <div className="col-3">        
          <ChannelList />
        </div>
        <div className="col-9">
          <MessageBoard />
        </div>
      </div>
    </div>
  );
}

export default App;