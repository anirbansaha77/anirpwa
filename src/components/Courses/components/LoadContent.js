import React from 'react';
import TOC from './TOC';
import Content from './Content';

function LoadContent({ data  }) {
  return (
      <div>
            <TOC data={data}/>
            <Content data={data}/>
      </div>
  )
}

export default LoadContent;