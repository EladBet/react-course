import React, {Component} from 'react';
import TextParticle from './TextParticle'
import Separator from './Separator'

export default function Section(props) {

    let sectionsMap = new Map();
    sectionsMap.set('TextParticle', TextParticle);
    sectionsMap.set('Separator', Separator);

    const DynamicSection = sectionsMap.get(props.type);

    return (
        <div>
            <DynamicSection {...props} />
        </div>
    );
}
