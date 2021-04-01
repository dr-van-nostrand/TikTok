import React from "react";
import styled, { css } from "styled-components";

let linkStyle = css`

`;

let Example = styled.div`
  background-color: skyblue;
  height: 100vh;
  padding: 20%;
`;

let Button = styled.button`
    border: 1px solid gray;
    width: 300px;
    height: 50px;
    background-color: ${ ({primary}) => primary ? 'tomato' : 'gold' };
`;

let HomePage = (props) => {
  return <Example>
            <h1>Hello motherfuckers!</h1>
            <Button primary>Send</Button>
        </Example>;
};

export default HomePage;
