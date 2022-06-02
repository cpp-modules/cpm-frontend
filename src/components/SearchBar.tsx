import React from "react";
import styled from "styled-components";

import Logo from "../logo.svg";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  padding: 0.5rem 2rem;

  border-bottom: 1px solid #eee;
`;

const SearchInput = styled.input`
  height: 100%;
  width: 600px;
  border: 1.5px dashed #eee;

  padding: 0.5rem 1rem;
`;

const SearchButton = styled.button`
  height: 100%;

  padding: 0.5rem 1rem;

  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;

  background: #2e2e2e;
`;

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <img src={Logo} alt="logo" width="80px" />
      <div>
        <SearchInput type="text" placeholder="Search Modules" />
        <SearchButton>Search</SearchButton>
      </div>
      <div>
        <span>★</span>
      </div>
    </SearchBarContainer>
  );
}
