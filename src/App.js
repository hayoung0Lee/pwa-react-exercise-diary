import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <header>Hayoung's exercise app</header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/stat">통계보기</Link>
              </li>
              <li>
                <Link to="/export">데이터 내보내기</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/stat">
              <Stat />
            </Route>
            <Route path="/export">
              <Export />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Stat() {
  return <h2>stat</h2>;
}

function Export() {
  return <h2>export</h2>;
}

export default App;
