import React from 'react';
//import logo from './logo.svg';
import '../../App.css';
import { Link } from "react-router-dom";
function Header() {
  return (
      <div>
        <div className={`stickyTop ${!navigator.onLine?"stickyTopOffline":""}`}>
          <div className="CardTitle">
            Anirban Saha
          </div>
          <span >
            <a style={{ "textDecoration": "none"}} href="mailto:anirbansaha77@gmail.com">Email Me: anirbansaha77@gmail.com</a>
          </span>
          <section>
            <div className="MenuConatiner">
              {/* <div className="MenuItem">
                <Link to="/about">About</Link>
              </div> */}
              <div className={`MenuItem ${window.location.pathname === '/' ? 'Active' : 'inActive'}`}>
                <Link className="MenuLink" to="/">Home</Link>
              </div>
              <div className={`MenuItem ${window.location.pathname.toLocaleLowerCase() === '/javascript' ? 'Active' : 'inActive'}`}>
                <Link  className="MenuLink" to="/JavaScript">JavaScript</Link>
              </div>
              <div className={`MenuItem ${window.location.pathname.toLocaleLowerCase() === '/reactquestions' ? 'Active' : 'inActive'}`}>
                <Link className="MenuLink" to="/ReactQuestions">React</Link>
              </div>
              
            </div>
          </section>
        </div>
      </div>
  )
}

export default Header;