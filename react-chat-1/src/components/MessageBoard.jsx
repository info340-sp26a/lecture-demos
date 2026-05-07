import INITIAL_CHAT_LOG from '../data/chat_log.json';

export function MessageBoard(props) {

  //[{},{},{}]
  const messageArray = INITIAL_CHAT_LOG;

  //[<>,<>,<>]
  const messageElemArray = messageArray.map((msgObj) => {
    const transformed = (
      <MessageItem key={msgObj.timestamp} messageData={msgObj} />
    );
    return transformed;
  })


  const paraArray = [
    <p key="A">A</p>,
    <p key="B">B</p>,
    <p key="C">C</p>,
  ]

  //[<>,<>,<>]
  // const messageElemArray = [
  //     <MessageItem messageData={messageArray[0]} />,      
  //     <MessageItem messageData={messageArray[1]} />,      
  //     <MessageItem messageData={messageArray[2]} />,      
  //     <MessageItem messageData={messageArray[3]} />,      
  // ]

  return (
    <div>

      {/* {paraArray} */}
      {messageElemArray}

    </div>
  )
}

function MessageItem(props) {
  console.log(props);
  const text = props.messageData.text;
  const user = props.messageData.userName;
  const userImg = props.messageData.userImg;
  
  return (
    <div className="message d-flex mb-4">
      <img src={userImg} alt={user+"'s avatar"} />
      <div className="ms-2">
        <p><strong>{user}</strong></p>
        <p>{text}</p>
      </div>
    </div>
  )
}