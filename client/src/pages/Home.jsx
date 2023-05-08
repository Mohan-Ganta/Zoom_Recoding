import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 500px;
  color: white;
  position: sticky;
  margin-top: 5%;
  margin-left: 40%;
  box-shadow: 15px 15px 5px #ccc;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 30px;
  gap: 20px;
  padding: 50px 70px;
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  color: black;
  background: skyblue;
  padding: 15px 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  margin: 20px 0px;
`;

const Heading = styled.h1`
  font-size: 50px;
  font-family: Roboto,sans-serif;
  font-weight: 500;
  color: black;
  text-decoration: underline;
`

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>WE MEET</Heading>
        <ButtonDiv>
          <Button>New Meeting</Button>
          <Button>Join Meeting</Button>
        </ButtonDiv>
      </Wrapper>
    </Container>
  );
};

export default Home;
