import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoHeader from "./components/TodoHeader";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #e9ecef
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
      </TodoTemplate>
    </>
  );
}

export default App;
