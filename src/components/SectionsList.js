import React from 'react';
import Section from './Section'

export default function SectionsList(props) {
    return (
        <div>
            {props.sections.map((section, index) => <Section key={index} {...section}></Section>)}
        </div>
    );
};
