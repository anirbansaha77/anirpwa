import React, { Suspense } from 'react';
import './Home.css';

import Recommendations from '../Recommendations';
const Skills = React.lazy(() => import ('../Skills'));
const Projects = React.lazy(() => import ('../Projects/Projects'));

function Home() {
  return (
    <div>
        <div className="title">React.js FrontEnd Software Engineer - Team Lead</div>
        <div>
            <img className="tagCloud" alt='anirbansaha skills tag cloud' src='/images/tag-cloud2.png' />
        </div>
        <div className="container">
            <div className="content skillContent">
                <Suspense fallback={<div>lazy loading Skills...</div>}>
                    <Skills />
                </Suspense>
            </div>
        </div>
        <div className="container">
            <div className="content">
                <Suspense fallback={<div>lazy loading projects...</div>}>
                    <Projects />
                </Suspense>
            </div>
        </div>
        <div className="container">
            <div className="content">
                <Recommendations />
            </div>
        </div>
    </div>
  )
}

export default Home;


    