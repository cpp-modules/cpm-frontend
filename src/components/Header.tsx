import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid #eee;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  padding: 0.5rem 1rem;
`;

const HeaderGradient = styled.div`
  background: linear-gradient(to right, #11998e, #38ef7d);
  width: 100%;
  height: 10px;
`;

const SpanButton = styled.span`
  font-size: 0.8rem;
  font-weight: 600;

  margin-left: 2rem;
`

export const Header = () => {
  return <HeaderContainer>
    <HeaderGradient />
    <HeaderContent>
      <span>★</span>
      <div>
        <SpanButton>Products</SpanButton>
        <SpanButton>About</SpanButton>
        <SpanButton>Documentation</SpanButton>
      </div>
    </HeaderContent>
  </HeaderContainer>;
};
