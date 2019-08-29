import React from 'react';
//import logo from './logo.svg';
import './About.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const aa =  function() {
    console.log("hi")
}
const codeString = aa.toString();
function About() {
  return (
      <div>
          About
          <div>
            <SyntaxHighlighter language="javascript" style={docco}>
                {codeString}
            </SyntaxHighlighter>
        </div>
      </div>
  )
}

export default About;