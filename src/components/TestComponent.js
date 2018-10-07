import React, { Component } from 'react';

class TestComponent extends Component {

    render() {
        return (
            <p>
                {this.props.message}
            </p>
        );
    }
}

export default TestComponent;
