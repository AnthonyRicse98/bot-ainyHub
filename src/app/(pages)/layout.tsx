import React, { ReactNode } from "react";
import "../../shared/styles/globals.css";

interface IuLayout {
  children: ReactNode;
}
export default function RootLayout({ children }:IuLayout) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
