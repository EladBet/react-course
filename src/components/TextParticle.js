import React from 'react';

export default function TextParticle(props) {

    return (
        <div>
            { props.show &&
            <div style={{
                fontSize: parseInt(props.fontSize),
                color: props.color,
                direction: props.isRtl ? 'RTL' : 'LTR'
            }}>
                {props.text}
            </div>
            }
        </div>
    );
};
