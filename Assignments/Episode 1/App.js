// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from JS";

// const root = document.getElementById("root");
// root.appendChild(heading);

const heading = React.createElement("h1", {class: "heading"}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);