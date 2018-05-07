import React, {Component} from 'react';

export default class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dots: '.'
        };

        setInterval(() => {
            if (this.state.dots.length % 3 === 0) {
                this.setState({dots: '.'});
            } else if (this.state.dots.length % 3 === 1) {
                this.setState({dots: '..'});
            } else {
                this.setState({dots: '...'});
            }
        }, 200);
    }

    render() {
        return (
            <div>
                {this.props.show && <span>Loading{this.state.dots}</span>}
            </div>
        );
    }
};
