import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  background-color: white;
  position: relative;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  width: 512px;
  height: 650px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
