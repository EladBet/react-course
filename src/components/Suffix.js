import React, {Component} from 'react';

export default function Suffix(props) {
    return (
        <div>
            {props.show && <div>powered by Playbuzz react developers</div>}
        </div>
    );
};
