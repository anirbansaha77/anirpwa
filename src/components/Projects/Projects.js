import React from 'react';
//import logo from './logo.svg';
import './Projects.css';

function Projects() {
  return (
    <div>
        <div className="Title">
            Projects i am most proud of
        </div>
        <div className="projectContainerWrapper">
            <div className="projectContainer">
                <div className="project">
                    <div className="project" style={{ 'color':'#034C9D'}}>
                        Samsung
                    </div>
                    <div className="projectLinks">
                        <a style={{ "textDecoration": "none"}} rel="noopener noreferrer" href="https://www.samsung.com/in/lite/" target='_blank'>
                            -<span style={{ 'color':'#034C9D'}}> PWA Samsung India  </span><img src='/images/url.svg' alt='link' width='10px' />
                        </a>
                    </div>
                    
                    <div className="projectLinks">
                        <a style={{ "textDecoration": "none"}} rel="noopener noreferrer" href="https://www.samsung.com/us/lite/buy/smartphones/vc/note9/index.html" target='_blank'>
                            -<span style={{ 'color':'#034C9D'}}> Phone Configurator  </span><img src='/images/url.svg' alt='link' width='10px' />
                        </a>
                    </div>
                </div>
                <div className="project">
                    <div className="project" style={{ 'color':'#CF1D29'}}>
                        JCPenney
                    </div>
                    <div className="projectLinks">
                        <a style={{ "textDecoration": "none"}} rel="noopener noreferrer" href="https://www.jcpenney.com/cart" target='_blank'>
                            -<span style={{ 'color':'#CF1D29'}}> JCPenney Cart  </span><img src='/images/url.svg' alt='link' width='10px' />
                        </a>
                    </div>
                    <div className="projectLinks">
                        <a style={{ "textDecoration": "none"}} rel="noopener noreferrer" href="https://www.jcpenney.com/checkout" target='_blank'>
                            -<span style={{ 'color':'#CF1D29'}}> JCPenney Checkout  </span><img src='/images/url.svg' alt='link' width='10px' />
                        </a>
                    </div>
                    <div className="projectLinks">
                        <a style={{ "textDecoration": "none"}} rel="noopener noreferrer" href="https://www.jcpenney.com/cart/giftcard" target='_blank'>
                            -<span style={{ 'color':'#CF1D29'}}> JCPenney Gift-Card Balance  </span><img src='/images/url.svg' alt='link' width='10px' />
                        </a>
                    </div>
                </div>
                <div className="project">
                    <div className="project" style={{ 'color':'#170939'}}>
                        Esurance
                    </div>
                    <div className="projectLinks">
                        <a style={{ "textDecoration": "none"}} rel="noopener noreferrer" href="https://protection.esurance.com/" target='_blank'>
                            -<span style={{ 'color':'#170939'}}> Esurance (use zip 54001)  </span><img src='/images/url.svg' alt='link' width='10px' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects;