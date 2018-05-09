import React from 'react';
import Section from './Section'
import ErrorBoundary from './ErrorBundary'

export default function SectionsList(props) {
    return (
        <div>
            {props.sections.map((section, index) =>
            <ErrorBoundary>
                <Section key={index} {...section}></Section>
            </ErrorBoundary>)}
        </div>
    );
};
