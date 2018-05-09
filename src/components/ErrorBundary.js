import React, {Component} from 'react';
import PubSub from 'pubsub-js';


export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        PubSub.publish('UNKNOWN', error);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        } else {
            return this.props.children;
        }
    }
}
