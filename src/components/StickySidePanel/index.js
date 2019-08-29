import React from 'react';
//import logo from './logo.svg';
import '../../App.css';

function StickySidePanel() {
  return (
    <div className="stickyPanel">
        <div className="padding10">
        <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/anirbansaha77/">
            <img border="0" alt="W3Schools" src="/images/linkedin.svg" width="30px" height="30px" />
        </a>
        </div>
        <hr style={{width: '70%'}} />
        <div className="padding10">
        <a target='_blank' rel="noopener noreferrer" href="https://github.com/anirbansaha77">
            <img border="0" alt="W3Schools" src="/images/github-logo.svg" width="30px" height="30px" />
        </a>
        </div>
        <hr style={{width: '70%'}} />
        <div className="padding10">
        <a style={{ "textDecoration": "none"}} className="noLine" target='_blank' rel="noopener noreferrer" href="/AnirbanSahaResume.doc">
            <img border="0" alt="W3Schools" src="/images/resumedownload.svg" width="30px" height="30px" />
            <br/>
            <span className="stickyPanelFont">Resume</span>
        </a>
        </div>
    </div>
  )
}

export default StickySidePanel;