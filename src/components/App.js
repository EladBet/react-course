import React, {Component} from 'react';
import SectionList from './SectionsList'
import GetData from './DataService'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { sections: [] };
        GetData().then(sections =>  this.setState({
            sections: sections
        }));
    }

    render() {
        return (
            <div>
                <SectionList sections={this.state.sections}/>
            </div>
        );
    }
}
