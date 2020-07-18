import React from "react";
import ReactDOM from "react-dom";
import Container from "./src/components/container/index.js";

class App extends React.Component {
    render() {
        return <Container />
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))
