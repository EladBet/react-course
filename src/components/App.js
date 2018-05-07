import React, {Component} from 'react';
import SectionList from './SectionsList'
import {Authorized, GetData} from './DataService'
import Loader from './Loader'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { sections: [], isLoading: true };
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
                <Loader show={this.state.isLoading}/>
                <SectionList sections={this.state.sections}/>
            </div>
        );
    }
}
