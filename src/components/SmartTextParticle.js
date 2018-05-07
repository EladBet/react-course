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
            textProps: props,
            shouldTranslate: GetUrlParam('translate') === 'he'
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.shouldTranslate) {
            Translate(prevState.text).then(translatedText => {
                prevState.text = translatedText;
                prevState.isLoading = false;
                prevState.isRtl = true;

               return prevState;
            });
        }
        prevState.isLoading = false;
        return prevState;
    }

    render() {
        return (
            <div>
                <Header show={this.props.isHeader} source={this.props.backgroundImgUrl}/>
                <Loader show={this.state.isLoading}/>
                <TextParticle show={!this.state.isLoading} {...this.state.textProps} />
                <Suffix show={this.props.isLast}/>
            </div>
        );
    }
};
