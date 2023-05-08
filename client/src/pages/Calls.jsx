import React from "react";
import styled from "styled-components";
import Card from "../Components/Card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
`;

const Heading = styled.h1`
  margin-left: 20%;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 40px;
  text-decoration: underline;
`;


const Calls = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>All Calls</Heading>
        <Card details={"Recording 1"} />
        <Card details={"Recording 2"} />
        <Card details={"Recording 3"} />
        <Card details={"Recording 4"} />
        <Card details={"Recording 5"} />
        <Card details={"Recording 6"} />
        <Card details={"Recording 7"} />
        <Card details={"Recording 8"} />
        <Card details={"Recording 9"} />
        <Card details={"Recording 10"} />
        <Card details={"Recording 11"} />
        <Card details={"Recording 12"} />
        <Card details={"Recording 13"} />
        <Card details={"Recording 14"} />
        <Card details={"Recording 15"} />
      </Wrapper>
    </Container>
  );
};

export default Calls;
