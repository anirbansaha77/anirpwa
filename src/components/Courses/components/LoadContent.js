import React from 'react';
import DynamicContent from './DynamicContent';
import TOC from './TOC';
import Content from './Content';

function LoadContent({ data  }) {
    let toc = data && data.toc || [];
    let content = data && data.content || [];
  return (
      <div>
            <TOC data={data}/>
            <Content data={data}/>
      </div>
  )
}

export default LoadContent;