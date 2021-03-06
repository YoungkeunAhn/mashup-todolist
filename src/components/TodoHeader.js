import React from "react";
import styled from "styled-components";

const TodoHeaderBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .task-left {
    color: 20c997;
    margin-top: 40px;
    font-size: 14px;
    font-weight: bold;
  }
`;

function TodoHeader() {
  return (
    <TodoHeaderBlock>
      <h1>2021년 5월 20일</h1>
      <div className="day">목요일</div>
      <div className="task-left">할일 많이 남음</div>
    </TodoHeaderBlock>
  );
}

export default TodoHeader;
