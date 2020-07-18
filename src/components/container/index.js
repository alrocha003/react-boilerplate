import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../container/style.css";

class Container extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            hello: 'Hello World'
        });
    }

    componentWillMount() {
    }

    render() {
        const { hello } = this.state;

        return (
            <div>
                <p style={{ alignContent: 'center' }}>{hello}</p>
            </div>
        );
    }
}

export default Container;