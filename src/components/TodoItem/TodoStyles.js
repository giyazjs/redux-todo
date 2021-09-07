import styled from "styled-components";

export const TodoItemWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 45px;
  background: ${(props) => props.bg || "#b34040"};
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: space-between;
  
  .btnWrapper {
    display: flex;
    grid-gap: 5px;
  }
`;
