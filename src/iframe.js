import React from "react";
import IframeComm from "react-iframe-comm";
import Notes from "./text";

const Demo = ({}) => {
  // the html attributes to create the iframe with
  // make sure you use camelCase attribute names
  const aggr = {
    src: "https://v3.aggr.trade/utm4",
    width: "80%",
    height: "500",
    frameBorder: 0 // show frame border just for fun...
  };

  const exo = {
    src: "https://www.youtube.com/",
    width: "50%",
    height: "500",
    frameBorder: 0 // show frame border just for fun...
  };

//   const tv = {
//     src: "https://coin360.com/",
//     width: "100%",
//     height: "800",
//     frameBorder: 0 // show frame border just for fun...
//   };



  // the postMessage data you want to send to your iframe
  // it will be send after the iframe has loaded
  const postMessageData = "hello iframe from parent";

  // parent received a message from iframe
  const onReceiveMessage = (m) => {
    console.log("parent ReceiveMessage :", m.data);
  };

  // iframe has loaded
  const onReady = () => {
    console.log("onReady");
    window.postMessage("iframe on ready");
  };

  return (
    <div>
  

     
      
  {/* value={note} onChange={handleChange} */}
  <div class="flex flex-row mt-0 justify-start gap-1">

<Notes/>  
  
   <IframeComm
        attributes={aggr}
        postMessageData={postMessageData}
        handleReady={onReady}
        handleReceiveMessage={onReceiveMessage}
      /> 
          {/* <IframeComm
        attributes={tv}
        postMessageData={postMessageData}
        handleReady={onReady}
        handleReceiveMessage={onReceiveMessage}
  
      />  */}
          </div>

    </div>
  );
};

export default Demo;
