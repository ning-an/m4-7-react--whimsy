import React from "react";
import styled from "styled-components";

export const Stat = ({ num, label }) => {
  return (
    <Wrapper>
      <Data>{num}</Data>
      <span>{label}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  color: grey;
  margin-right: 30px;
`;

const Data = styled.span`
  font-weight: bold;
  color: black;
  margin-right: 5px;
`;
