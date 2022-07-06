import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  margin: 1.5rem;

  border: 1px solid #eee;
  border-radius: 5px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
`;

const TitleLine = (props: { color: string }) => {
  return (
    <div
      style={{
        width: "80%",
        height: "0px",
        border: `1px solid ${props.color}`,
        marginBottom: "0.5rem",
      }}
    />
  );
};

const Popular = (props: { name: string }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        width: "80%",
        padding: "0.5rem",
        fontWeight: "600",
        borderBottom: "1px solid #eee",
      }}
    >
      {props.name}
    </div>
  );
};

export const Recommendations = () => {
  const popularModules = [
    'react',
    'react-dom',
    'styled-components',
  ];

  return (
    <Container>
      <Column>
        <h2>Popular</h2>
        <TitleLine color="#f00" />
        {popularModules.map((name) => (
          <Popular name={name} />
        ))}
      </Column>
      <Column>
        <h2>Discover</h2>
        <TitleLine color="#0f0" />
      </Column>
      <Column>
        <h2>New</h2>
        <TitleLine color="#00f" />
      </Column>
    </Container>
  );
}
