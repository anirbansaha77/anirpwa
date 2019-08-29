import React from 'react';
import './Skills.css';
import skills from './Skill';

let renderSkills = (collection, title, cssClass) => {
    return(
        <div className="skillsTitleWrapper" key={collection.Title.replace(' ','')+'_titleBox'}>
            <div key={collection.Title.replace(' ','')+'_title'} className="skillsTitle">
                {collection.Title}
            </div>
            <div className="skillContainer" key={collection.Title.replace(' ','')+'_skillcont'}>
            {
                collection.options.map((item, index) => {
                    const style = {};
                    item.backgroundColor ? style.backgroundColor = item.backgroundColor  : void 0;
                    item.color ? style.color = item.color  : void 0;
                    return (
                        <div
                            style={ {...item.style} }
                            key={item.value.replace(' ','')+index}
                            className={ item.theme ? item.theme : "card"}>
                                { item.value }
                        </div>
                    );
                })
            }
            </div>
        </div>
    )
}
function Skills() {
  return (
      <div>
          <div className="Title">
              Skills
          </div>
          <div className="skillsContainerWrapper">
              <div className="skillContainer">
              {
                  skills.map(collection => {
                    return renderSkills(collection);
                  })
                  
              }
              </div>
          </div>
      </div>
  )
}

export default Skills;