import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  margin-top: 4%;
  margin-left: 10%;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 56px);
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3%;
  background-color: white;
  border: 1px solid gray;
  border-radius: 30px;
  padding: 50px 80px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: black;
  margin-bottom: 10px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: black;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: 0.5px solid gray;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  margin: 5px 0px;
  width: 100%;
  color: black;
  margin-bottom: 30px;
`;

const Button = styled.button`
  border-radius: 8px;
  border: none;
  padding: 12px 20px;
  font-weight: 400;
  background-color: skyblue;
  color: black;
  cursor: pointer;
`;

const Label = styled.text`
  font-size: 15px;
  font-weight: 300;
  color: red;
`;

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .post("http://localhost:5000/auth/signup", {
          name: name,
          email: email,
          password: password,
        })
        .catch((err) => {
          setErrors(err.response.data.Message);
          console.log(err);
        });
      console.log(res);
      setIsSignIn(true);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // const handleLogout = (e) =>{
  //   setIsSignIn(false);
  // }

  return (
    <Container>
      <Wrapper>
        <Title>Sign Up</Title>
        <SubTitle>To Continue WeMeet</SubTitle>
        <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.length > 0 ? <Label>{errors}</Label> : ""}
        {isSignIn ? (
          ""
        ) : (
          <Button onClick={handleSignIn}>Sign Up</Button>
        )}
      </Wrapper>
    </Container>
  );
};

export default SignUp;
