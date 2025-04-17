import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hello</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const HeadingComponent = () => {
    return <h1>Func Component</h1>
}

root.render(<HeadingComponent />)