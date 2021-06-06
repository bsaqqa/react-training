import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
// import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

let socket;
let counter = 0;

function App() {
  const [response, setResponse] = useState("");
  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
    socket.connect();
    socket.on("message", data => {
      setResponse(data);
    });
    
    socket.on("connect", () => {
      console.log(socket.id);
    });
   
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }, []);


  const sendMessage = ()=>{
    socket.emit('message', 'Data: ' + (counter++));
  }
  return (
    <p>
      {/* It's <time dateTime={response}>{response}</time> */}
      {response}
      <button className="p-2 bg-blue" onClick={sendMessage}>Send Message</button>
    </p>
  );
}

export default App;