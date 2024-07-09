// Nested Elements
// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm h1 tag")
//   )
// );

// Multiple childs
// const heading = React.createElement("div", { id: "child" }, [
//   React.createElement("h1", {}, "I'm h1 tag"),
//   React.createElement("h2", {}, "I'm h2 tag"),
// ]);
const heading = React.createElement("h1", {}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
