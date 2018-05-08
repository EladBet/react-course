import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './components/App'

export default function ssr(props)
{
    return renderToString(<App {...props}/>);
}
