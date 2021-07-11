import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.scss";

function Header(): JSX.Element {
  const history = useHistory();
  return (
    <header className="quiz-header">
      <div className="header-title" onClick={() => history.push("/")}>
        QUIZ QUIZ MINUS
      </div>
    </header>
  );
}

export default Header;
