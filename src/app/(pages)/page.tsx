"use client";
import "react-chatbot-kit/build/main.css";
import RootLayout from "./layout";
import Chatbot from "react-chatbot-kit";
import config from "@/configuration/chabot/config";
import MessageParser from "@/configuration/chabot/MessageProvider";
import ActionProvider from "@/configuration/chabot/ActionProvider";
import variables from '@/shared/styles/variables.module.scss'

import './index.scss'
const Home = () => {
  return (
    <RootLayout>
      <main>
        <div className="chatbot-section">
        <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </main>
    </RootLayout>
  );
};
export default Home;
