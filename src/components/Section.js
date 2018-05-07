import React, {Component} from 'react';
import SmartTextParticle from './SmartTextParticle'
import Separator from './Separator'

export default function Section(props) {

    let sectionsMap = new Map();
    sectionsMap.set('TextParticle', SmartTextParticle);
    sectionsMap.set('Separator', Separator);

    const DynamicSection = sectionsMap.get(props.type);

    return (
        <div>
            <DynamicSection {...props} />
        </div>
    );
}
