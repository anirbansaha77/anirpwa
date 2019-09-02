import React, { Suspense } from 'react';
//import logo from './logo.svg';
import './TOC.css';
import Enums from '../../../Data/CourseUtility/CourseEnum';
const SyntaxHighlighter = React.lazy(() => import ('react-syntax-highlighter'));
const { docco } =  React.lazy(() => import ('react-syntax-highlighter/dist/esm/styles/hljs'));
//const beautify = React.lazy(() => import ('js-beautify'));
var beautify = require('js-beautify').js;

function createMarkup(value) { return {__html: value };}
class DynamicContent extends React.Component {
    renderText(value, title) {
        return(
            <div>
                { title && <div className="contentTitle">{title}</div> }
                {value}
            </div>
        )
    }
    renderCode(value, title) {
        return(
            <div>
                { title && <div className="contentTitle">{title}</div> }
                <Suspense fallback={<div>Loading Code Block...</div>}>
                    <div>
                        <SyntaxHighlighter language="javascript" style={docco}>
                            {beautify(value, { indent_size: 2, space_in_empty_paren: true })}
                        </SyntaxHighlighter>
                    </div>
                </Suspense>
            </div>
        )
    }
    renderVideo(value, title) {
        return(
            <div>
                { title && <div className="contentTitle">{title}</div> }
                <Suspense fallback={<div>Loading Video Block...</div>}>
                    <div>
                        <iframe title={Math.random()} src="value" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div>
                </Suspense>
            </div>
        )
    }

    renderRich(value, title) {
        return(
            <div>
                { title && <div className="contentTitle">{title}</div> }
                <div dangerouslySetInnerHTML={createMarkup(value)} />
            </div>
        )
    }

    renderImage(value, title) {
        return(
            <div>
                { title && <div className="contentTitle">{title}</div> }
                <img alt='imagehere' style={{width:"100%"}} src={value} />
            </div>
        )
    }
    render() {
        const { Content } = this.props;
        return(
            <div>
                {
                    Content && Content.type === Enums.ContentTypes.TEXT &&
                    <div className="Answer">
                        { this.renderText(Content.value, Content.title) }
                    </div>
                }
                {
                    Content && Content.type === Enums.ContentTypes.CODE &&
                    <div className="Answer">
                        { this.renderCode(Content.value, Content.title) }
                    </div>
                }
                {
                    Content && Content.type === Enums.ContentTypes.VIDEO &&
                    <div className="Answer">
                        { this.renderVideo(Content.value, Content.title) }
                    </div>
                }
                {
                    Content && (Content.type === Enums.ContentTypes.LIST || Content.type === Enums.ContentTypes.RICH) &&
                    <div className="Answer">
                        { this.renderRich(Content.value, Content.title) }
                    </div>
                }
                {
                    Content && Content.type === Enums.ContentTypes.IMAGE &&
                    <div className="Answer">
                        { this.renderImage(Content.value, Content.title) }
                    </div>
                }
            </div>
        )
    }
}

export default DynamicContent;