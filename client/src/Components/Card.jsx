import React from "react";
import styled from "styled-components";
// import VideocamIcon from "@mui/icons-material/Videocam";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
  margin-left: 20%;
`;

const Details = styled.div`
  display: flex;
  gap: 12px;
  flex: 1;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Card = ({details}) => {
  return (
    <Container>
      <Wrapper>
        <Details>
          <Image src="videocam.jpg" alt="Image.png" />
          <Text>{details}</Text>
        </Details>
      </Wrapper>
    </Container>
  );
};

export default Card;
