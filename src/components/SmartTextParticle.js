import React, {Component} from 'react';
import Header from './Header'
import Suffix from './Suffix'
import TextParticle from './TextParticle'
import {Translate, GetUrlParam} from './DataService'
import Loader from './Loader'

export default class SmartTextParticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRtl: false,
            isLoading: false,
            text: props.text,
            color: props.color,
            fontSize: props.fontSize
        };
    }

    componentDidMount() {
        if (GetUrlParam('translate') === 'he') {
            Translate(this.state.text).then(translatedText => {
                this.setState({
                    text: translatedText,
                    isRtl: true,
                    isLoading: false
                })
            });
        } else {
            this.setState({
                isLoading: false
            })
        }
    }

    render() {
        return (
            <div>
                <Header show={this.props.isHeader} source={this.props.backgroundImgUrl}/>
                <Loader show={this.state.isLoading}/>
                <TextParticle show={!this.state.isLoading} {...this.state} />
                <Suffix show={this.props.isLast}/>
            </div>
        );
    }
};
