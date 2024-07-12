import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import userIcon from "./user icon.png";

// Using React.createElement
// const heading = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "Heading 1"),
//   React.createElement("h2", {}, "Heading 2"),
//   React.createElement("h3", {}, "Heading 3"),
// ]);

// Using JSX - React Element
// const heading = (
//   <div>
//     <h1>Heading 1 JSX - React Element</h1>
//     <h2>Heading 2 JSX - React Element</h2>
//     <h3>Heading 3 JSX - React Element</h3>
//   </div>
// )

// Using Functional Component - JSX
// Composition of component
const Title = () => <h1>Title Component</h1>;

const Heading = () => (
  <div>
    <Title />
    <h1>Heading 1 JSX - Functional Component</h1>
    <h2>Heading 2 JSX - Functional Component</h2>
    <h3>Heading 3 JSX - Functional Component</h3>
  </div>
);

// Header Component
const HeaderComponent = () => (
  <header>
    <nav>
      <ul>
        <li>
          <img src={logo} />
        </li>
        <li>
          <input type="text" />
        </li>
        <li>
          <img src={userIcon} />
        </li>
      </ul>
    </nav>
  </header>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
