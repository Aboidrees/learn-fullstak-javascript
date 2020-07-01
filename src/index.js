import React from "react";
import ReactDOM from "react-dom";

const Header = ({message}) => {
    return (
        <h2 className="header text-center">{message}</h2>
    );
};


const App = () => {
    return (
        <div className="App">
            <Header message="Naming Contest" />
            <div>
                ....
            </div>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
