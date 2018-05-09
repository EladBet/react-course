import React, {Component} from 'react';
import SectionList from './SectionsList'
import {Authorized, GetData} from './DataService'
import Loader from './Loader'
import PubSub from 'pubsub-js';

export default class App extends Component {
    constructor(props) {
        super(props);
        PubSub.subscribe('UNKNOWN', ((type ,payload) => console.log('UNKNOWN happened', payload)));
        this.state = { sections: [], isLoading: true };
    }

    componentDidMount() {
        GetData().then(sections => {
            // To demonstrate slow loading
            setTimeout(() => {
                this.setState({
                    sections: sections,
                    isLoading: false,
                    translate: false
                })
            }, 2000);
        });


        // Authorized().then(res => console.log(res))
        //     .then((res) => console.log('TODO getData'))
        //     .catch(err => console.log('app constructor faild on authorized', error));
    }

    render() {
        return (
            <div>
                <h1>{this.props.ssrData}</h1>
                <Loader show={this.state.isLoading}/>
                <SectionList sections={this.state.sections}/>
            </div>
        );
    }
}
