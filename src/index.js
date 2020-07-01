import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
    return (
        <h2 className="text-center">
            {props.headerMessage}
        </h2>
    );
};

ReactDOM.render(
    <App headerMessage="1" />,
    document.getElementById("root")
);
