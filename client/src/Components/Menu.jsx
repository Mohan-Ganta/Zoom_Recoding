import React from 'react'
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-top: 65px;
  background: white;
  height: 100%;
  width: 20%;
  color: black;
  font-weight: 12px;
  position: fixed;
  top: 0;
  border: 2px solid gray;
  margin-left:0px;
`;

const Wrapper = styled.div`
`

const UpperMenu = styled.div`
  display: flex;
  background-color: #B9D9EB;
  color: white;
  align-items-center;
  border: 2px solid #007FFF;
  width:100%;
  height: 56px;
  border-radius: 10px;
  margin-bottom: 7%;
`

const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  margin: auto;
  font-size: 25px;
  color: black;
`

const Items = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 15px;
  gap: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  padding: 7px 0px;
  // font-color: black;

  &:hover {
    background-color: lightgray;
  }
`;

const SearchDiv = styled.div`
  display: flex;
  margin-top: 5%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  margin-bottom: 10%;
  margin-left: 2%;
`
const Search = styled.div`
  display: flex;
  width: 80%;
  padding: 8px;
  position: relative;
  aign-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 20px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  background-color: transparent;
  outline: none;
  padding: 1px 0px;
`;



const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <UpperMenu>
          <Text>Contacts</Text>
        </UpperMenu>
        <SearchDiv><Search><Input placeholder='Search'></Input><SearchIcon/></Search></SearchDiv>
        <Items>
        MENU
        </Items>
        <Items>
        MENU
        </Items>
        <Items>
        MENU
        </Items>
        <Items>
        MENU
        </Items>
      </Wrapper>
    </Container>
  )
}

export default Menu