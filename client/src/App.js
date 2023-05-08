import Home from "./pages/Home";
import styled from "styled-components";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calls from "./pages/Calls";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  padding: 5px 5px;
`;

const Main = styled.div`
  flex: 7;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="/calls" element={<Calls type="calls" />} />
                <Route path="/login" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
