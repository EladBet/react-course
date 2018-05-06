import React, {Component} from 'react';
import Header from './Header'
import Suffix from './Suffix'

export default function TextParticle(props) {
    return (
        <div>
            <Header show={props.isHeader} source={props.backgroundImgUrl} />
            <div style={{fontSize: parseInt(props.fontSize),
                color: props.color,
                direction:props.isRtl ? 'RTL' : 'LTR'}}>
                {props.text}
            </div>
            <Suffix show={props.isLast} />
        </div>
    );
};
