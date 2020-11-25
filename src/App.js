import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Stat from "./Stat";

const UlStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  margin-top: 30px;

  li {
    width: 120px;
    list-style: none;
    diplay: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
  }
`;

const MainWrapper = styled.main`
  width: 80%;
  background-color: yellow;
  margin: auto;
`;

function App() {
  const [tab, setTab] = useState("HOME");

  return (
    <>
      <Router>
        <div>
          <nav>
            <UlStyle>
              <li>
                <Link to="/" onClick={() => setTab("HOME")}>
                  Home
                </Link>
              </li>
              <li>{tab}</li>
              <li>
                <Link to="/stat" onClick={() => setTab("STAT")}>
                  통계보기
                </Link>
              </li>
            </UlStyle>
          </nav>

          <MainWrapper>
            <Switch>
              <Route path="/stat">
                <Stat />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </MainWrapper>
        </div>
      </Router>
    </>
  );
}

export default App;
