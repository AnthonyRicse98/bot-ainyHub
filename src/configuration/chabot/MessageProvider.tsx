import React from "react";
import { IMessages } from "./libs/constant";


const MessageParser = ({ children, actions }: IMessages) => {
  const parse = (message: string) => {
    // logic bot in text block
    if (message.includes("hello")) {
        actions.handlerHello()
    }
  };
  return (
    <div>
      {React.Children.map(children, (child: React.ReactElement) => {
        return React.cloneElement(child, {
          parse ,
          actions 
        });
      })}
    </div>
  );
};
export default MessageParser;
