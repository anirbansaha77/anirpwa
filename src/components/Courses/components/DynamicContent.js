import React, { Suspense } from 'react';
//import logo from './logo.svg';
import './TOC.css';
import Enums from '../../../Data/CourseUtility/CourseEnum';
const SyntaxHighlighter = React.lazy(() => import ('react-syntax-highlighter'));
const { docco } =  React.lazy(() => import ('react-syntax-highlighter/dist/esm/styles/hljs'));
//const beautify = React.lazy(() => import ('js-beautify'));
var beautify = require('js-beautify').js;
class DynamicContent extends React.Component {
    constructor(props) {
        super(props)
    }
    renderText(value) {
        return(
            <div>
                {value}
            </div>
        )
    }
    renderCode(value) {
        return(
            <div>
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
    render() {
        const { Content } = this.props;
        return(
            <div>
                {
                    Content && Content.type === Enums.ContentTypes.TEXT &&
                    <div className="Answer">
                        { this.renderText(Content.value) }
                    </div>
                }
                {
                    Content && Content.type === Enums.ContentTypes.CODE &&
                    <div className="Answer">
                        { this.renderCode(Content.value) }
                    </div>
                }
            </div>
        )
    }
}

export default DynamicContent;