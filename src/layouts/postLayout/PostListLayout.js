import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function PostListLayout({postList}) {
console.log(postList);

  return (
    <Accordion defaultActiveKey="0">
        {postList.map((val, key)=>{
        return(    <Accordion.Item eventKey={key + 1}>
            <Accordion.Header>{val.title}</Accordion.Header>
            <Accordion.Body>
              {val.body}
            </Accordion.Body>
          </Accordion.Item>)
        })}
      
    </Accordion>
  );
}

export default PostListLayout;