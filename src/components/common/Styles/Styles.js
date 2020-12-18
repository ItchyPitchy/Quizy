import styled from "styled-components";


export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 160px);
  max-width: 500px;
  padding: 80px 40px;
  margin: 0 auto;

  h1 {
    color: #FC8E30;
    font-size: 64px;
    margin: 0 0 80px;
  }

  h2 {
    color: black;
    font-size: 48px;
    margin: 0 0 80px;
  }
`;