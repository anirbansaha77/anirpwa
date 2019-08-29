import React from 'react';
import DynamicContent from './DynamicContent';
import './TOC.css';
const QuestionData = null;
const toc = null;


function Content({data}) {
    let toc = data && data.toc || [];
    let content = data && data.content || [];
  return (
      <div>
          <div className="TOCTitle">Contents</div>
          <br/>
          <div className="TOCContainer">
            {
                toc && toc.map(item => (
                    <>
                        <div id={`#${item.id}`} className="Question">
                            {item.serial+'. '+item.Title}
                            <br/>
                            
                        </div>
                        <div className="Answer">
                            {
                                
                                content && content[item.id].content.map(value => (
                                    <div>
                                        <DynamicContent Content={value} />
                                    </div>
                                ))
                            }
                        </div>
                    </>
                ))
            }
          </div>
      </div>
  )
}

export default Content;