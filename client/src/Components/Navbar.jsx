import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  background-color: #0047ab;
  height: 65px;
  border: 1px solid #0047ab;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-left: 1%;
  margin-right: 1%;
  cursor: pointer;
  padding: 0px 5px;
  &:hover {
    display: inline-block;
    position: relative;
    background-color: lightgray;
    color: black;
    padding: 12px 5px;
    text-decoration: underline;
  }
`;

const Search = styled.div`
  width: 18%;
  height: 25%;
  color: white;
  padding: 10px;
  position: absolute;
  margin: 80% 20%;
  display: flex;
  aign-items: center;
  justify-content: space-between;
  border: 2px solid #ccc;
  border-radius: 40px;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 40px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  outline: none;
  background-color: transparent;
  color: white;
  padding: 5px;
  align-items: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  margin-left: 650px;
  margin-right: 20px;
`;
const Button = styled.button`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  gap: 10px;
  position: sticky;
  &:hover {
    display: inline-block;
    position: relative;
    background-color: lightgray;
    color: black;
    padding: 12px 5px;
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  padding: 0px 10px;
  border-radius: 30px;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Logo src="logomain.png" alt="Logo"/>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Heading>Home</Heading>
        </Link>
        <Link to="/calls" style={{ textDecoration: "none", color: "inherit" }}>
          <Heading>Calls</Heading>
        </Link>
        <Heading>Deals</Heading>
        <Heading>Teams</Heading>
        <Heading>Activity</Heading>
        <Heading>Library</Heading>
        <Search>
          <Input placeholder="Search" />
          <SearchIcon />
        </Search>
        <ButtonDiv>
          <Link
            to="signup"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button>Sign Up</Button>
          </Link>
          <Link to="login" style={{ textDecoration: "none", color: "inherit" }}>
            <Button>Login</Button>
          </Link>
        </ButtonDiv>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
