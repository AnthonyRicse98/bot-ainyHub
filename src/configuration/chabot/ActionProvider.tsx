import React from "react";
interface IActionProvider {
  createChatBotMessage: any;
  setState: any;
  children: React.ReactElement;
}

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}: IActionProvider) => {
  const handlerHello = () => {
    //TODO:  handle es el object para pasar acciones al messageparser
    const botMesssage = createChatBotMessage("Hello, Nice to Meet you.");

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMesssage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handlerHello,
          },
        });
      })}
    </div>
  );
};
export default ActionProvider;
