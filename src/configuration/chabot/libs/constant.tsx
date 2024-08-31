//MessageProvider

interface IMessageActions {
  handlerHello: () => void;
}

interface IMessages {
  children: React.ReactElement;
  actions: IMessageActions;
}

export type { IMessages };
