import React from 'react';
import '../../App.css';
import { NavLink } from "react-router-dom";
import { Courses } from '../../Data/CourseUtility/CourseEnum';
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
              <NavLink className={'MenuItem MenuLink'} exact activeClassName={"MenuItem MenuLink Active"} to="/">
                Home
              </NavLink>
              {
                Object.keys(Courses).map(course => {
                  return(
                    <NavLink className={'MenuItem MenuLink'} activeClassName={"MenuItem MenuLink Active"} to={Courses[course].route}>
                      {Courses[course].value}
                    </NavLink>
                  )
                })
              }
                
                {/* <NavLink className={'MenuItem MenuLink'} activeClassName={"MenuItem MenuLink Active"} to="/JavaScript">
                  JavaScript
                </NavLink>
                <NavLink className={'MenuItem MenuLink'} activeClassName={"MenuItem MenuLink Active"} to="/ReactQuestions">
                  React
                </NavLink> */}
            </div>
          </section>
        </div>
      </div>
  )
}

export default Header;