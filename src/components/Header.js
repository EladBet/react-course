import React, {Component} from 'react';

export default function Header(props) {
    return (
        <div>
            {props.show && <img src={props.source}/>}
        </div>
    );
};
