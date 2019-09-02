import React from 'react';
import DynamicContent from './DynamicContent';
import './TOC.css';


class Content extends React.Component{
    onClick =(event) => {
        event.preventDefault();
        const element = document.getElementById('top');
        element.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
    render() {
        const data = this.props.data;
        let toc = (data && data.toc) || [];
        let content = (data && data.content) || [];
        return (
            <div>
                <div className="TOCTitle">Contents</div>
                <br/>
                <div className="TOCContainer">
                    {
                        toc && toc.map(item => (
                            <>
                                <div id={`#${item.id}`} className="Question">
                                    <div style={{width: '95%'}}>{item.serial+'. '+item.Title}</div>
                                    <div>
                                        <a href = { `#${item.id}` } name={ `#${item.id}` } onClick = { this.onClick }>
                                        {'top'}</a>
                                    </div>    
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
    
}

export default Content;