import React from 'react';
import './TOC.css';
class TOC extends React.Component {
    onClick =(event) => {
        const element = document.getElementById(event.target.name);
        element.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
    render() {
        let toc = (this.props.data && this.props.data.toc) || [];
        return ( 
            <div className="TOCContainer">
                <div id="top" className="TOCTitle">Table of Contents</div>
                <br/ >
                {
                    toc && toc.map(item => ( 
                        <div className="TOCLine">
                            <a href = { `#${item.id}` } name={ `#${item.id}` } onClick = { this.onClick }>
                            {`${item.serial}. ${item.Title}` }</a>
                        </div>
                    ))
                } 
            </div>
        )
    }
}

export default TOC;