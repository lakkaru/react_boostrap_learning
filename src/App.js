import "./App.css";
import PostLayout from "./layouts/PostLayout";
import UserLayout from "./layouts/UserLayout";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function App() {
  const [selectedUserId, setSelectedUserId]=useState('');

  const getUserId=(userId)=>{
    // console.log(userId);
    setSelectedUserId(userId);
    
  };
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <UserLayout getUserId={getUserId}/>
        </Col>
        <Col sm={8}>
          <PostLayout selectedUserId={selectedUserId}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
