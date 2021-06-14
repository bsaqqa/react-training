import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
// import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

let socket;
let counter = 0;

function App() {
  const [textMessage, setTextMessage] = useState("");
  const [isOnline, setOnline] = useState(false);
  const [messages, setMessages] = useState([
    // {body:"Hello Ibtisam", created_at: new Date()},
    // {body:"Hello Ibtisam", created_at: new Date()},
    // {body:"Hello Ibtisam", created_at: new Date()},
  ]);

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
    socket.connect();
    
    socket.on("message", data => {
      console.log(data);
      setMessages(oldMessages => [...oldMessages, data]);
      let scrollTo = document.querySelector('#messages li:last-child').offsetTop;
      document.querySelector('#messages').scrollTo(0, scrollTo);
    });
    
    socket.on("connect", () => {
      console.log(socket.id);
    });
    socket.on('online', id=>{
      if(id !== socket.id){
        setOnline(true);
      }
    });
    socket.on('offline', id=>{
      if(id !== socket.id){
        setOnline(false);
      }
    });
    window.onfocus = function(e){
      socket.emit('read-message', {target: '*', socketId: socket.id});
    }
   
    socket.on("read-message", data => {
      if(data.target === "*" && data.socketId !== socket.id){
        setMessages(oldMessages => oldMessages.map(message=>{
          if(data.socketId !== message.user_id){
            message.is_read = true;
          }

          return message;
        }));
      }
    });
   
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }, []);


  const sendMessage = (e)=>{
    e.preventDefault();
    if(textMessage.length !=0 ){
      socket.emit('message', {id:(+new Date),body:textMessage, created_at: new Date(), user_id:socket.id});
      setTextMessage('');
    }
  }
  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto mt-5">
      <div className="w-full p-5 shadow-md">
        <div className="inline-flex flex-row items-center ">
          <img className="w-16 h-16 mr-4 rounded-full" src="https://via.placeholder.com/90" />
          <span>Anyenimous
          {isOnline ?
            <span 
              className="flex w-2 h-2 bg-green-600 rounded-full" 
              ></span>:
            <span 
              className="flex w-2 h-2 bg-red-600 rounded-full" 
              ></span>
            }
          </span>
        </div>

        
      </div>
      <ul id="messages" className="flex flex-col flex-1 p-5 overflow-y-auto h-80 max-h-80">
        {messages.map((e, index)=>(

          <li key={index} className={socket && (e.user_id == socket.id)?  "self-end p-3 mb-2 bg-blue-200 rounded-md " :"self-start p-3 mb-2 bg-gray-200 rounded-md "}

          >
            <span>{e.body}</span>
            <time className="ml-2 text-xs text-gray-500 " 
              dateTime={(new Date(e.created_at)).toUTCString()}
              title={(new Date(e.created_at)).toUTCString()}>

              {(new Date(e.created_at)).toLocaleTimeString()}
              
            </time>
            {e.is_read && <span 
              className="flex w-2 h-2 bg-blue-600 rounded-full" 
              ></span>}
          </li>
          
        ))}
      </ul>

      <form className="flex " onSubmit={sendMessage}>
        <div className="flex items-center flex-1 px-4">
          <input name="message"
            value={textMessage}
            onChange={(e)=>setTextMessage(e.target.value)}
           className="flex-1 border-2 border-solid rounded-md w-100 border-dark-200"  />
        </div>
        <div className="flex items-center px-4">
          <button className="p-2 text-white bg-green-500 rounded-md">Send Message</button>
        </div>
      </form>

    </div>
  );
}

export default App;